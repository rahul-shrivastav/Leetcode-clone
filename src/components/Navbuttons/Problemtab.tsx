import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import Problems from "../Problempage/Problems";
import ProblemNav from "../Problempage/ProblemNav";
import Logo from "../Global/Logo";

const Problemtab = () => {
    return (
        <div className=" font-extralight px-3 py-3 hover:scale-110  transition-all duration-500 ">
            <Sheet  >
                <SheetTrigger className=' text-white'>Problems</SheetTrigger>
                <SheetContent className=' text-white bg-black  overflow-y-scroll scrollbar '>
                    <SheetHeader>
                        <SheetTitle className="mb-5 relative left-0 sm:-left-4 "><span>SOLVE </span> <span className="text-[20px] text-violet-800 ">PROBLEMS</span></SheetTitle>
                        <SheetDescription className="">
                        </SheetDescription>
                    </SheetHeader>
                    <div className="w-full  h-full scale-100">

                        <ProblemNav />
                        <Problems />
                        <Problems difficulty="Medium" />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                        <Problems />
                    </div>

                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Problemtab;