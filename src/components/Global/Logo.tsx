import { TbSwords } from "react-icons/tb";
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()

    return (
        <div className=" flex-col items-center justify-center hover:cursor-pointer" onClick={() => { router.push(`/`) }}>
            <div className="flex items-center justify-center ">
                <span className="text-5xl text-violet-800 ">{"{"}</span>
                <span className="text-5xl font-extrabold"><TbSwords /></span>
                <span className="text-5xl text-violet-800">{"}"}</span>
            </div>
            <div className="text-[14px] text-center pt-1 font-extralight"><span className="font-semibold text-[18px] ">C</span>ode<span className=" text-[18px]  font-semibold">A</span>rena</div>
        </div>
    );
}

export default Logo;