import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { TbBell } from "react-icons/tb";

const Notification = () => {
    const islogin = true
    return (
        <HoverCard>
            <HoverCardTrigger><button className="font-extralight  py-2 hover:scale-110 duration-500 text-2xl relative  "><div className={(islogin ? "w-[5px] h-[5px] absolute top-2 left-3/4 bg-violet-800 rounded-full" : "hidden")}></div><TbBell /> </button></HoverCardTrigger>
            <HoverCardContent >
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
        </HoverCard >

    );
}

export default Notification;