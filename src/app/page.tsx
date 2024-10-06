'use client'
import Navbar from "@/components/Global/Navbar";
import InfiniteScroll from "@/components/Homepage/InfiniteScroll";
import Metrics from "@/components/Homepage/Metrics";
import { useEffect } from "react";

export default function Home() {


  return (
    < >
      <div className="w-full overflow-x-clip h-fit min-h-svh bg-black flex flex-col ">

        <Navbar />
        <div className="w-full  text-white gap-2 md:gap-10 grow  flex items-center justify-center bg-black">

          <div className=" w-4/12 border h-[85vh] py-10 shadow-slate-900 border-violet-800 border-opacity-50 shadow-2xl flex flex-col items-center justify-center mt-20">
            <div className="font-extralight  text-2xl  ">Welcome ,</div>
            <div className="m-5 font-extralight  text-4xl">Rahul Shrivastava</div>
            <div className="w-4/5 border border-violet-900 border-opacity-70 "></div>
            <div className="font-thin text-2xl mt-5">Total Solved : <span className="text-violet-300">{90}</span> </div>
            <div className="font-thin text-2xl mt-5">Total Unsolved : <span className="text-violet-300">{90}</span> </div>
            <div className="font-thin text-2xl mt-5">Total Attempted : <span className="text-violet-300">{90}</span> </div>
            <div className="font-thin text-2xl mt-5">1v1 Battles Won : <span className="text-violet-300">{90}</span> </div>
            <button className="mt-10 font-thin border border-violet-600 hover:bg-gray-950  px-10 py-2  w-4/5 text-[20px] rounded-sm">Solve a Random Question</button>
            <button className="mt-10 font-thin border border-violet-600 hover:bg-gray-950  px-10 py-2  w-4/5 text-[20px] rounded-sm">Challenge a Friend</button>
            <div className="mt-10 w-full">
              <InfiniteScroll />
            </div>

          </div>

          <div className=" w-7/12 h-[85vh]  flex flex-col items-center justify-center mt-20  ">

            <Metrics easy={50} med={90} hard={70} />


          </div>

        </div>

      </div>

    </>

  );
}
