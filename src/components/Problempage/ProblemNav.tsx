import { CgMenuCheese } from "react-icons/cg";

const ProblemNav = () => {
    return (
        <div className="border-2 text-[10px] color1 mb-5 font-bold border-white border-opacity-5 w-full flex   items-center justify-between py-2 px-5 scale-90 sm:scale-100 ">
            <div className="flex gap-5 items-center justify-center">
                <div className="text-white max-w-6 ">Status</div>
                <div className=" text-white text-center  min-w-16 ">{"Difficulty"}</div>
            </div>



            <div className="text-[14px] text-white  w-80 max-w-80 text-center  ">Problem Statement</div>
            <div className="flex items-center justify-center text-2xl text-white   min-w-36">
                <CgMenuCheese />


            </div>

        </div>
    );
}

export default ProblemNav;