import Logo from "@/components/Global/Logo"
const Navbar = () => {
    return (
        <div className="flex items-center justify-center gap-10 py-7">
            <div className="scale-90"><Logo /></div>
            <div className=""><button className=" px-3 py-3  ">Home</button></div>
            <div className=""><button className=" px-3 py-3  ">Home</button></div>
            <div className=""><button className=" px-3 py-3  ">Home</button></div>
            <div className=""><button className=" px-3 py-3  ">Login</button></div>

        </div>
    );
}

export default Navbar;
