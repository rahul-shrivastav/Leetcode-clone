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

const Navbar = () => {
    const session = useSession()
    console.log(session)
    return (
        <div className=" max-h-[75px] shadow-lg  shadow-gray-900 absolute top-0 w-full overflow-x-clip  flex items-center justify-between    text-white border-b border-white border-opacity-10">
            <div className="scale-[0.65] ml-5 hover:scale-[0.73] transition-all duration-500 "><Logo /></div>
            <div className="flex mr-5 items-center justify-center gap-9  ">
                <div className=""><Problemtab /></div>
                <div className=""><Versustab /></div>
                <div className=""><Friendstab /></div>
                <div className=""><Notification /></div>
                {
                    session.status === "unauthenticated" &&
                    <div className=" border font-extralight px-7 py-2    shadow-violet-900   rounded-md border-violet-900 hover:bg-gradient-to-r hover:from-violet-800 hover:border-black hover:to-violet-950 duration-500 transition-all "><Authdialog /></div>
                }
                {/* {session.status === 'authenticated' &&
                    <div className="hover:scale-[1.1] transition-all duration-700 text-2xl border-2 rounded-full border-purple-800"><BsPersonCircle />
                    </div>
                } */}
                {session.status === 'authenticated' &&
                    <button className="text-2xl" onClick={() => { signOut() }} ><TbLogout /></button>
                }
            </div>

        </div>
    );
}

export default Navbar;
