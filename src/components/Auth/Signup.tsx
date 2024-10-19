'use client'
import { useState } from "react";
import { SignUp } from "@/controllers/auth.controller"
import { MdPeopleAlt } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
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
        // e.preventDefault();
        await SignUp(inputs)
    };


    return (
        <div className="w-full h-fit flex  items-center justify-center ">

            <form className="w-full" onSubmit={handleSubmit}>
                <div className="border-t border-black border-opacity-5 bg-white flex flex-col shadow-2xl w-11/12 max-w-96 gap-10 py-10 m-auto items-center justify-center" >

                    <div className="w-4/5 flex items-center justify-center">
                        <div className="text-2xl text-black border p-2"><MdPeopleAlt /></div>
                        <input className="outline-none w-full border px-3 py-2" type="text" value={inputs.fullName} onChange={handleEvent} name="fullName" placeholder="Full Name" id="fullName" />
                    </div>

                    <div className="w-4/5 flex items-center justify-center">
                        <div className="text-2xl text-black border p-2"><MdPeopleAlt /></div>
                        <input className="outline-none w-full border px-3 py-2" type="text" value={inputs.username} onChange={handleEvent} name="username" placeholder="Username" id="username" />
                    </div>

                    <div className="w-4/5 flex items-center justify-center">
                        <div className="text-2xl text-black border p-2"><RiLockPasswordFill /></div>
                        <input className="outline-none w-full border px-3 py-2" type="password" value={inputs.password} onChange={handleEvent} name="password" placeholder="Password" id="password" />
                    </div>

                    <div className="w-4/5 flex items-center justify-center">
                        <div className="text-2xl text-black border p-2"><RiLockPasswordFill /></div>
                        <input className="outline-none w-full border px-3 py-2" type="password" value={inputs.confirmPassword} onChange={handleEvent} name="confirmPassword" placeholder="Confirm Password" id="confirmPassword" />
                    </div>

                    <div className="w-4/5">
                        <button type="submit" className="w-full py-2 bg-black text-white rounded-md">Sign Up</button>
                    </div>
                </div>





            </form >

        </div >
    );
}

export default Signup;