'use client'
import Navbar from "@/components/Global/Navbar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { useEffect, useState } from "react";

export default function Page() {
    const [sheight, setheight] = useState(0)
    const [hclass, setclass] = useState('')



    return (
        <div className="w-full h-screen overflow-x-auto overflow-y-clip text-white max-h-screen bg-black  flex flex-col items-center justify-end ">
            <Navbar />

            <div className={"w-full flex items-center justify-center  border  border-slate-800  h-[85%]  absolute top-[100px] "}>

                <ResizablePanelGroup direction="horizontal"  >
                    <ResizablePanel className=" ">
                        <div className="  w-full h-full  border ">

                        </div>

                    </ResizablePanel>
                    <ResizableHandle withHandle className="opacity-10" />
                    <ResizablePanel className="">
                        <ResizablePanelGroup className="" direction="vertical">
                            <ResizablePanel className="">One</ResizablePanel>
                            <ResizableHandle withHandle className="opacity-10" />
                            <ResizablePanel className="">three</ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>

        </div>
    );
}