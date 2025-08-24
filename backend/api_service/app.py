import os,redis
import json,uuid
from flask import Flask, request, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()  
app = Flask(__name__)
CORS(app)

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
r = redis.Redis.from_url(REDIS_URL)

MONGO_URI = os.getenv("MONGO_DB_URI", "mongodb://localhost:27017")
mongo_client = MongoClient(MONGO_URI)
db = mongo_client["Application"]
submissions = db["submissions"]

@app.route("/submit", methods=["POST"])
def submit_code():
    print("Submitting code...")
    try:
        data = request.get_json()
        code = data.get("code")
        inputs = data.get("inputs", [])

        if not code:
            return jsonify({"stdout": '',"exit_code": 124,  "stderr" : "No code given."})

        submission_id = str(uuid.uuid4())
        job = {
            "submission_id": submission_id,
            "code": code,
            "inputs": inputs,
        }

        r.lpush("submissions_queue", json.dumps(job))

        submissions.insert_one({
            "submission_id": submission_id,
            "status": "pending"
        })

        return jsonify({"submission_id": submission_id})
    except Exception as e:
        print(e)
        return jsonify({"stdout": '',"exit_code": 124,  "stderr" : e}), 500


@app.route("/status/<submission_id>", methods=["GET"])
def get_status(submission_id):
    doc = submissions.find_one({"submission_id": submission_id}, {"_id": 0})
    if not doc:
        return jsonify({"error": "Submission not found"}), 404
    return jsonify(doc)

@app.route("/ping",methods=["GET"])
def ping():
    print('Pinged API')
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
