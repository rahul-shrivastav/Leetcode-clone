import { TbSwords } from "react-icons/tb";

const Logo = () => {
    return (
        <div className=" flex-col items-center justify-center hover:cursor-pointer  ">
            <div className="flex items-center justify-center ">
                <span className="text-5xl text-violet-800 ">{"{"}</span>
                <span className="text-5xl font-extrabold"><TbSwords /></span>
                <span className="text-5xl text-violet-800">{"}"}</span>
            </div>
            <div className="text-[14px] text-center pt-2">CodeArena</div>
        </div>
    );
}

export default Logo;