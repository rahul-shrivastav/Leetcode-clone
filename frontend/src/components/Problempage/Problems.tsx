
import { useRouter } from 'next/navigation'

const Problems = ({ name, difficulty, id }: any) => {
    const done = false
    const router = useRouter()


    return (
        <div className="border-2 border-white mb-2 hover:bg-gray-950 border-opacity-10 w-full flex   items-center justify-between py-2 px-5 rounded-lg">
            <div className="flex gap-5 items-center justify-center">
                <div className="border border-violet-900 p-2  rounded-xl text-white min-w-16 text-center scale-90">{difficulty}</div>
            </div>



            <div className="text-[14px] text-white   text-center  font-extralight w-fit relative left-4">{name}</div>

            <div className="flex items-center justify-center gap-2  ">

                <button onClick={() => { router.push(`/solve-problem/${id}`) }} className=" bg-none border hover:border-white border-violet-700 text-white hover:bg-slate-200 px-3  py-2 hover:text-black rounded-sm ">Attempt</button>

            </div>

        </div>
    );
}

export default Problems;