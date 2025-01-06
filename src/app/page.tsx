//@ts-nocheck
'use client'
import { useRouter } from 'next/navigation'
import Navbar from "@/components/Global/Navbar";
import InfiniteScroll from "@/components/Homepage/InfiniteScroll";
import Metrics from "@/components/Homepage/Metrics";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const session = useSession()
  const router = useRouter()
  const [datas, setdata] = useState(null)

  if (!session.data) {
    session.status = 'unauthenticated';
  }
  else {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify(session.data.user.data));
    }

  }
  useEffect(() => {
    const fetchproblem = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/fetchproblems`, {
        method: 'GET',
      });
      const data = await response.json()
      setdata(data.allProb)
    }
    fetchproblem()
  }, [])
  // console.log(datas)

  return (
    < >
      {<div className="w-full overflow-x-clip h-fit min-h-svh bg-black flex flex-col ">

        <Navbar />
        <div className="w-full  text-white gap-0 md:gap-10 grow xl:flex-row  flex flex-col-reverse items-center justify-center bg-black">


          {/* leftside */}
          <div className=" w-[90%] border h-[85vh] py-10 xl:w-4/12 shadow-slate-900 border-slate-600 border-opacity-50 shadow-2xl flex flex-col items-center justify-center mt-20">
            <div className="font-extralight  text-2xl  ">Welcome ,</div>
            {
              //@ts-ignore
              session.data && <div className="m-5 font-extralight  text-4xl">{session.status === 'authenticated' ? session.data.user.data.fullName : "to CodeArena"}</div>
            }
            {
              !session.data && <div className="m-5 font-extralight  text-4xl">To CodeArena</div>
            }
            <div className="w-4/5 border border-violet-900 border-opacity-70 "></div>
            <div className="font-thin text-2xl mt-5">Total Solved : <span className="text-violet-300">{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).totalsolved : 'NA'}</span> </div>
            <div className="font-thin text-2xl mt-5">Total Unsolved : <span className="text-violet-300">{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).totalunsolved : 'NA'}</span> </div>
            <div className="font-thin text-2xl mt-5">Total Attempted : <span className="text-violet-300">{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).totalattempted : 'NA'}</span> </div>
            <div className="font-thin text-2xl mt-5">1v1 Battles Won : <span className="text-violet-300">{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).battlewon : 'NA'}</span> </div>
            <button onClick={() => { router.push(`/solve-problem/${datas[Math.floor(Math.random() * datas.length)]._id}`) }} className="mt-10 font-thin border border-violet-600 hover:bg-gray-950  px-10 py-2  w-4/5 text-[20px] rounded-sm">Solve a Random Question</button>
            <button disabled className=" disabled:cursor-not-allowed mt-10 font-thin border border-violet-600 hover:bg-gray-950  px-10 py-2  w-4/5 text-[20px] rounded-sm">Challenge a Friend</button>
            <div className="mt-10 w-full">
              <InfiniteScroll />
            </div>

          </div>
          {/* rightside */}
          <div className="max-[860px]:mt-28 w-[90%] h-[85vh]    xl:w-7/12  flex flex-col items-center justify-center mt-20  ">
            <Metrics hprobs={1} eprobs={2} mprobs={1} />
          </div>

        </div>

      </div>}

    </>

  );
}
