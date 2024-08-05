import Logo from "@/components/Global/Logo"
import { TbBell } from "react-icons/tb";
import { TbBellExclamation } from "react-icons/tb";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"

const Navbar = () => {
    const islogin = true;
    return (
        <div className=" shadow-lg  shadow-gray-950    flex items-center justify-between  py-2  text-white border-b border-white border-opacity-10">
            <div className="scale-[0.7] ml-5 hover:scale-[0.73] transition-all duration-500 "><Logo /></div>
            <div className="flex mr-5 items-center justify-center gap-9 ">
                <div className=""><button className=" font-extralight px-3 py-3 hover:font-semibold  transition-all duration-500 ">
                    <Sheet>
                        <SheetTrigger>Problems</SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </button></div>

                <div className=""><button className="font-extralight px-3 py-3 hover:font-semibold transition-all duration-500">1v1</button></div>
                <div className=""><button className="font-extralight px-3 py-3 hover:font-semibold transition-all duration-500 ">Friends</button></div>
                <div className=""><button className="font-extralight  py-3 hover:scale-105 duration-500 text-2xl ">{islogin ? <TbBell /> : <TbBellExclamation />}</button></div>
                <div className=""><button className=" border font-extralight px-9 py-2    shadow-violet-900   rounded-md border-violet-900 hover:bg-gradient-to-r hover:from-violet-800 hover:border-black hover:to-violet-950 duration-500 transition-all ">Login</button></div>
            </div>

        </div>
    );
}

export default Navbar;
