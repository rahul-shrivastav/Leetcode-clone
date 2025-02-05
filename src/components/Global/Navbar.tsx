'use client'
import Logo from "@/components/Global/Logo"
import Problemtab from "../Navbuttons/Problemtab";
import Versustab from "../Navbuttons/Versustab";
import Friendstab from "../Navbuttons/Friendstab";
import Authdialog from "../Navbuttons/Authdialog";
import Notification from "../Navbuttons/Notification";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'
import { TbLogout } from "react-icons/tb";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger, } from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci";
//@ts-ignore
const Navbar = () => {
    const session = useSession()
    // console.log(session)
    return (
        <div className=" max-h-[75px] shadow-lg   shadow-gray-900 absolute top-0 w-full overflow-x-clip  flex items-center justify-between    text-white border-b border-white border-opacity-10">
            <div className="scale-[0.65] ml-5 hover:scale-[0.73] transition-all duration-500 "><Logo /></div>
            <div className="flex mr-5 items-center justify-center gap-9 max-[550px]:hidden ">
                <div className=""><Problemtab /></div>
                <div className=""><Versustab /></div>
                <div className=""><Friendstab /></div>
                <div className=""><Notification /></div>
                {
                    session.status === "unauthenticated" &&
                    <div className=" border font-extralight px-7 py-2    shadow-violet-900   rounded-md border-violet-900 hover:bg-gradient-to-r hover:from-violet-800 hover:border-black hover:to-violet-950 duration-500 transition-all "><Authdialog /></div>
                }

                {session.status === 'authenticated' &&
                    <button className="text-2xl" onClick={() => { signOut(); localStorage.removeItem('user') }} ><TbLogout /></button>
                }
            </div>
            <div className="hidden max-[550px]:flex">
                <Sheet  >
                    <SheetTrigger className=' text-white font-bold text-2xl relative -left-5'><CiMenuFries /></SheetTrigger>
                    <SheetContent className=' text-white bg-black  overflow-y-scroll scrollbar '>
                        <SheetHeader>
                            {/* <SheetTitle className="mb-5 relative left-0 sm:-left-4 "><span>SOLVE </span> <span className="text-[20px] text-violet-800 ">PROBLEMS</span></SheetTitle> */}
                            <SheetDescription className="">
                                {session.status === 'authenticated' &&
                                    <button className="text-2xl border border-slate-800 rounded-md hover:bg-slate-600 w-full flex items-center justify-center p-5" onClick={() => { signOut() }} ><TbLogout /></button>
                                }
                                {
                                    session.status === "unauthenticated" &&
                                    <div className=" border font-extralight px-7 py-2 text-2xl   shadow-violet-900 border-slate-800 rounded-md flex items-center justify-center hover:bg-slate-600   duration-500 transition-all "><Authdialog /></div>
                                }
                            </SheetDescription>
                        </SheetHeader>

                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;
