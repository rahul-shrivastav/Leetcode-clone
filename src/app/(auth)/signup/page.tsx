
import Link from "next/link";
const page = () => {
    return (
        <div className="w-full h-screen flex bg-slate-100 items-center justify-center ">
            <div className=" bg-white flex flex-col shadow-2xl w-11/12 max-w-96 gap-10 py-10 m-auto items-center justify-center" >
                <div>SIGNUP</div>
                <div className="w-4/5">
                    <input className="w-full border px-3 py-2" type="text" name="fullName" placeholder="Full Name" id="" />
                </div>
                <div className="w-4/5">
                    <input className="w-full border px-3 py-2" type="text" name="username" placeholder="Username" id="" />
                </div>
                <div className="w-4/5">
                    <input className="w-full border px-3 py-2" type="password" name="password" placeholder="Password" id="" />
                </div>

                <div className="w-4/5">
                    <button className="w-full py-2 bg-slate-300 rounded-md">Login</button>
                </div>
                <div className="w-4/5 text-gray-500 text-center">
                    Already have an account ? <Link className="text-black" href="/">Log in</Link>

                </div>




            </div>

        </div>
    );
}

export default page;
