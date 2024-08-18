
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa6";
import { useRouter } from 'next/navigation'

const Problems = ({ name = "N-Queen Problem", difficulty = "Hard" }) => {
    const done = false
    const router = useRouter()


    return (
        <div className="border-2 border-white mb-2 hover:bg-gray-950 border-opacity-10 w-full flex   items-center justify-between py-2 px-5 rounded-lg">
            <div className="flex gap-5 items-center justify-center">
                <div className="text-violet-400 text-2xl max-w-6 ">{done ? <IoMdCheckmarkCircleOutline /> : <MdOutlineCancel />}</div>
                <div className="border border-violet-900 p-2  rounded-xl text-white min-w-16 text-center scale-90">{difficulty}</div>
            </div>



            <div className="text-[14px] text-white  w-80 max-w-80 text-center  font-extralight">{name}</div>

            <div className="flex items-center justify-center gap-2  min-w-36">

                <button onClick={() => { router.push('/solve-problem') }} className=" bg-none border hover:border-white border-violet-700 text-white hover:bg-slate-200 px-3 h-7 hover:text-black rounded-sm ">Attempt</button>
                <button className=" bg-none border hover:border-white border-violet-700 text-white hover:bg-slate-200 px-3 h-7 hover:text-black rounded-sm "><FaNotesMedical /></button>

            </div>

        </div>
    );
}

export default Problems;