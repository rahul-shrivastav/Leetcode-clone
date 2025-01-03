import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"

const Versustab = () => {
    return (
        <div className=" font-extralight px-3 py-3 hover:scale-110  transition-all duration-500 ">
            <Sheet >
                <SheetTrigger className=' text-white'>1v1</SheetTrigger>
                <SheetContent className='text-white bg-black '>
                    <SheetHeader>
                        <SheetTitle>CHALLENGE <span className="px-2 text-violet-800 text-[25px]">1 v 1  </span> DSA BATTLE</SheetTitle>
                        <SheetDescription >
                            <div className="h-[80vh]  flex items-center justify-center">
                                This feature is currently unavailable.
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Versustab;