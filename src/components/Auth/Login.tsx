'use client'
import { useState } from "react";
import { SignIn, GoogleSignin } from "@/controllers/auth.controller"
import { FcGoogle } from "react-icons/fc";
import { MdPeopleAlt } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "rahul",
        password: "password",
    });

    const handleEvent = (e: any) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: any) => {
        // e.preventDefault()
        SignIn(inputs)
    }
    return (
        <div className="w-full   h-fit flex  items-center justify-center relative ">

            <form onSubmit={handleSubmit} className="w-full ">

                <div className="border-t border-black border-opacity-5 bg-white flex flex-col shadow-2xl w-11/12 max-w-96 gap-10 py-10 m-auto items-center justify-center" >
                    <div className="w-4/5 flex items-center justify-center">
                        <div className="text-2xl text-black border p-2"><MdPeopleAlt /></div>
                        <input value={inputs.username} onChange={handleEvent} className="w-full border px-3 py-2  outline-none" type="text" name="username" placeholder="Username" id="username" />
                    </div>
                    <div className="w-4/5 flex items-center justify-center">
                        <div className="text-2xl text-black border p-2"><RiLockPasswordFill />
                        </div>

                        <input value={inputs.password} onChange={handleEvent} className="w-full border px-3 py-2 outline-none" type="password" name="password" placeholder="Password" id="password" />
                    </div>

                    <div className="w-4/5">
                        <button type="submit" className="w-full py-2 bg-black text-white rounded-md">Login</button>
                    </div>

                    <div className="w-4/5 text-gray-500 text-center ">
                        <button onClick={async () => { GoogleSignin() }} type="button" className="border-black border-opacity-50 flex  items-center justify-center border w-full  py-2 rounded-full  text-3xl"><FcGoogle /></button>
                    </div>
                </div>
            </form>

        </div>
    );

}

export default Login;