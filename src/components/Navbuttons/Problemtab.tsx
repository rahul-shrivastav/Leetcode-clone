import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"

const Problemtab = () => {
    return (
        <div className=" font-extralight px-3 py-3 hover:scale-110  transition-all duration-500 ">
            <Sheet >
                <SheetTrigger className=' text-white'>Problems</SheetTrigger>
                <SheetContent className='text-white bg-black '>
                    <SheetHeader>
                        <SheetTitle><span>SOLVE</span> <span className="text-[20px] text-violet-800 ">PROBLEMS</span></SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Problemtab;