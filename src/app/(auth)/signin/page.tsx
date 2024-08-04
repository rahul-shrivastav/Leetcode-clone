'use client'
import Link from "next/link";
import { useState } from "react";
import { SignIn, GoogleSignin } from "@/controllers/auth.controller"
import { FcGoogle } from "react-icons/fc";

const page = () => {
    const [inputs, setInputs] = useState({
        username: "rahul",
        password: "password",
    });

    const handleEvent = (e: any) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        SignIn(inputs)
    }
    return (
        <div className="w-full h-screen flex bg-slate-100 items-center justify-center ">
            <form onSubmit={handleSubmit} className="w-full">

                <div className=" bg-white flex flex-col shadow-2xl w-11/12 max-w-96 gap-10 py-10 m-auto items-center justify-center" >
                    <div>LOGIN</div>
                    <div className="w-4/5">
                        <input value={inputs.username} onChange={handleEvent} className="w-full border px-3 py-2" type="text" name="username" placeholder="Username" id="username" />
                    </div>
                    <div className="w-4/5">
                        <input value={inputs.password} onChange={handleEvent} className="w-full border px-3 py-2" type="password" name="password" placeholder="Password" id="password" />
                    </div>

                    <div className="w-4/5">
                        <button type="submit" className="w-full py-2 bg-slate-300 rounded-md">Login</button>
                    </div>
                    <div className="w-4/5 text-gray-500 text-center">
                        Dont have an account ? <Link className="text-black" href="/signup">Sign up</Link>
                    </div>
                    <div className="w-4/5 text-gray-500 text-center">
                        <button onClick={async () => { GoogleSignin() }} type="button" className=" flex  items-center justify-center border w-full  py-2 rounded-full  text-3xl"><FcGoogle /></button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default page;
