'use client'
import Link from "next/link";
import { useState } from "react";
import { SignUp } from "@/controllers/auth.controller"
import React from 'react'

const Page = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleEvent = (e: any) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        SignUp(inputs)
    };


    return (
        <div className="w-full h-screen flex bg-slate-100 items-center justify-center ">

            <form className="w-full" onSubmit={handleSubmit}>
                <div className=" bg-white flex flex-col shadow-2xl w-11/12 max-w-96 gap-10 py-10 m-auto items-center justify-center" >
                    <div>SIGNUP</div>

                    <div className="w-4/5">
                        <input className="w-full border px-3 py-2" type="text" value={inputs.fullName} onChange={handleEvent} name="fullName" placeholder="Full Name" id="fullName" />
                    </div>
                    <div className="w-4/5">
                        <input className="w-full border px-3 py-2" type="text" value={inputs.username} onChange={handleEvent} name="username" placeholder="Username" id="username" />
                    </div>
                    <div className="w-4/5">
                        <input className="w-full border px-3 py-2" type="password" value={inputs.password} onChange={handleEvent} name="password" placeholder="Password" id="password" />
                    </div>

                    <div className="w-4/5">
                        <input className="w-full border px-3 py-2" type="password" value={inputs.confirmPassword} onChange={handleEvent} name="confirmPassword" placeholder="Confirm Password" id="confirmPassword" />
                    </div>

                    <div className="w-4/5">
                        <button type="submit" className="w-full py-2 bg-slate-300 rounded-md">Sign Up</button>
                    </div>
                    <div className="w-4/5 text-gray-500 text-center">
                        Already have an account ? <Link className="text-black" href="/signin">Log in</Link>
                    </div>




                </div>
            </form>

        </div>
    );
}

export default Page;
