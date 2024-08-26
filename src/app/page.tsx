'use client'
import Navbar from "@/components/Global/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    const helper = async () => {
      const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '8017456fe0msh773044845ff0a38p101950jsn343e77d7b0ce',
          'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          language_id: 92,
          source_code: btoa('print("d")'),

        })
      };

      try {
        const response = await fetch(url, options);
        console.log("yoyuo")
        console.log(response.json());
      } catch (error) {
        console.log("yoyuoEE")
        console.error(error);
      }

    }
    helper()
    // const fetch = require('node-fetch');

  }, []);

  return (
    < >
      <div className="w-full overflow-x-clip h-fit min-h-svh bg-black flex flex-col ">

        <Navbar />
        <div className="w-full  text-white gap-2 md:gap-10 grow  flex items-center justify-center bg-black">
          <div className=" w-7/12 h-full border">sdf</div>
          <div className=" w-4/12 h-full border">dsfsd</div>
        </div>

      </div>

    </>

  );
}
