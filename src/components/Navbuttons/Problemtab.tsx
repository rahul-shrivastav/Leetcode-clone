import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import Problems from "../Problempage/Problems";
import ProblemNav from "../Problempage/ProblemNav";
import { useEffect, useState } from "react";

const Problemtab = () => {
    const [problems, setproblems] = useState(null)

    useEffect(() => {
        const fetchproblem = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/fetchproblems`, {
                method: 'GET',
            });
            const data = await response.json()
            setproblems(data.allProb)
        }
        fetchproblem()
    }, [])

    if (!problems) {
        return <div className="font-extralight ">Problems</div>
    }
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
                        {
                            //@ts-ignore
                            problems.map((problem) => {
                                return <Problems key={problem._id} difficulty={problem.difficulty} name={problem.name} id={problem._id} solved='' />
                            })
                        }
                    </div>

                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Problemtab;