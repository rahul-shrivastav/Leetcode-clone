import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { SignIn, GoogleSignin } from "@/controllers/auth.controller"
import { FcGoogle } from "react-icons/fc";

const Authdialog = ({ }) => {
    return (
        <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>

                <div className="h-36 text-gray-500 text-center  border-black w-full flex items-center justify-center ">
                    <button onClick={async () => { GoogleSignin() }} type="button" className=" w-3/4 border-opacity-40 rounded-sm font-extralight flex items-center justify-center -top-3  border-violet-900 hover:transform hover:scale-105 transition-transform shadow-2xl shadow-slate-400 border relative duration-300  p-5  text-3xl"><FcGoogle /><span className="text-2xl px-5">Sign in with Google</span></button>
                </div>

            </DialogContent>
        </Dialog>

    );
}

export default Authdialog;