import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"

const Friendstab = () => {
    return (
        <div className=" font-extralight px-3 py-3 hover:scale-110  transition-all duration-500 ">
            <Sheet >
                <SheetTrigger className=' text-white'>Friends</SheetTrigger>
                <SheetContent className='text-white bg-black '>
                    <SheetHeader>
                        <SheetTitle> YOUR<span className="mx-2 text-violet-800 text-[20px]">FRIENDS</span>   <span className="text-violet-800"></span></SheetTitle>
                        <SheetDescription>
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

export default Friendstab;