import os,redis
import json,time,uuid
import threading,subprocess
from flask import Flask, jsonify
from dotenv import load_dotenv
from pymongo import MongoClient
from flask_cors import CORS

load_dotenv()  
app = Flask(__name__)
CORS(app)

# set ENV  to 'development' for spawing docker container for code execution , render free tier doesnt allow it
# for render free server , code execution is done using subprocess library without docker containers
# make sure to install docker and python image from docker hub

ENV = 'dev'
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
MONGO_URI = os.getenv("MONGO_DB_URI", "mongodb://localhost:27017")

# use this for local redis instance
# r = redis.Redis.from_url(REDIS_URL)

# hosted redis instance
r = redis.Redis(
    host=os.getenv("REDIS_HOSTED_URL"),
    port=14567,
    decode_responses=True,
    username="default",
    password=os.getenv("REDIS_PASSWORD")
)

mongo_client = MongoClient(MONGO_URI)
db = mongo_client["Application"]

def modify_code(inputs,code):
    code.strip()
    for tc in inputs.split('_'):
        code += f'\nprint(Solution({tc}),end=\'_\')'
    return code

def run_code(code,inputs):
    os.makedirs("tmp", exist_ok=True)
    code = modify_code(inputs,code)
    filename = os.path.abspath("tmp/temp.py")
    with open(filename, "w") as f:
        f.write(code)

    mal_keywords = set(['os','subprocess','sys','shutil','pathlib'])

    for i in code.split(' '):
        if i in mal_keywords:
            return {"stdout": '',"exit_code": 1,  "stderr" : "Malicious Code Detected.Please write ethical code."}
    if not code:
        return {"stdout": '',"exit_code": 124,  "stderr" : "No code given."}

    if ENV == "production":
        try:
            result = subprocess.run(
                ['python', '-c', code],
                text=True,
                capture_output=True,
                timeout=5
            ) 
        except subprocess.TimeoutExpired:
            return {"stdout": '',"exit_code": 124,  "stderr" : "Time limit exceeded."}
    
        except Exception as e:
            return {"stdout": '',"exit_code": 1,  "stderr" : e}
    else:

        docker_cmd = [
            "docker", "run", "--rm", "--init",
            "--network", "none",         
            "--cpus=1",                   
            "--memory=256m",              
            "-v", f"{filename}:/app/code.py",
            "python:3.9",
            "timeout", "5s", "python", "/app/code.py"   
        ]

        result = subprocess.run(
            docker_cmd,
            capture_output=True,
            text=True
        )

    return {
        "stdout": result.stdout,
        "stderr": result.stderr,
        "exit_code": result.returncode
    } if result.returncode != 124 else {"stdout": '',"exit_code": 124,  "stderr" : "Time limit exceeded."}

def worker_loop(worker_id):
    print(f"[Worker {worker_id}] Started listening for jobs...")

    while True:
        try:
            _, job_data = r.brpop("submissions_queue") 
            print(job_data) 
            # job_data = r.lindex("submissions_queue", -1)
            job = json.loads(job_data)

            print(f"[Worker {worker_id}] Picked job {job['submission_id']}")
            result = run_code(job["code"],job["inputs"])
            query = {"submission_id": job['submission_id']}

            update = {
                "$set": {
                    "status": 'executed',
                    "stdout": result['stdout'],
                    "stderr": result['stderr'],
                    "exit_code": result['exit_code']
                }
            }
            result = db['submissions'].update_one(query, update)
            # print(result,'\n\n')

        except Exception as e:
            print(f"[Worker {worker_id}] Error: {e}\n\n")
            time.sleep(1)

def start_workers(n=2):
    for i in range(n):
        t = threading.Thread(target=worker_loop, args=(i,))
        t.daemon = True
        t.start()

@app.route("/ping")
def ping():
    print("Pinged Worker")
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    start_workers(n=3)  
    app.run(host="0.0.0.0", port=5000)
