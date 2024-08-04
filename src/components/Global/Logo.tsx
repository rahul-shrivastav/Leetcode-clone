import { TbSwords } from "react-icons/tb";

const Logo = () => {
    return (
        <div className=" flex-col items-center justify-center gap-0">
            <div className="flex items-center justify-center ">
                <span className="text-4xl">{"{"}</span>
                <span className="text-5xl font-extrabold"><TbSwords /></span>
                <span className="text-4xl">{"}"}</span>
            </div>
            <div className="text-[14px] text-center   w-full">CodeArena</div>
        </div>
    );
}

export default Logo;