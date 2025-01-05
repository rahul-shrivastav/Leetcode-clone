'use client'
import Navbar from "@/components/Global/Navbar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from "@/components/Problempage/CodeEditor";
import { FaLaptopCode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast"

export default function Page({ params }: any) {
    const desc = "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order."
    const [problem, setproblem] = useState(null)
    let loginbg = '';
    const session = useSession();
    const [outputs, setoutputs] = useState(null);
    const [eoutputs, seteoutputs] = useState([]);
    const [inputs, setinputs] = useState([]);

    const { toast } = useToast()


    if (session.status === 'authenticated') {
        loginbg = 'hidden '
    }
    const showtoast = (heading: string, desc: string) => {
        toast({
            title: heading,
            description: desc
        })
    }

    useEffect(() => {
        const fetchproblem = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/fetchoneproblem`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "id": params.id }),
            });
            const data = await response.json()

            setTimeout(() => {
                setproblem(data);
                setinputs(data[0].tcases.split(','))
                seteoutputs(data[0].eoutputs.split(','))

            }, 300);
        }
        fetchproblem()

    }, [])

    useEffect(() => {
        if (outputs) {
            let passed = true;
            // console.log(outputs)
            for (let i = 0; i < 3; i++) {
                let inp = inputs[i];
                let op = outputs[inp][0]
                if (op != eoutputs[i] + '\n') {
                    passed = false;
                    break;
                }
            }
            if (passed) {
                showtoast('Congratulations..!!', 'All test cases passed')
            } else {
                showtoast('Failed Attempt .', 'Some test cases failed')
            }

        }
    }, [outputs])





    if (!problem) {
        return <div className="w-screen h-screen bg-black flex items-center justify-center">
            <Navbar />
            <div className=" w-7 h-7 rounded-full border-t-2 animate-spin border-white"></div>
        </div>
    }
    return (
        <div className="-z-20 w-full h-screen overflow-x-auto overflow-y-clip text-slate-300 max-h-screen bg-black  flex flex-col items-center justify-end ">
            <Navbar />

            <div className={"w-full flex items-center justify-center  border  border-slate-800  h-[83%]  absolute top-[100px] "}>

                <ResizablePanelGroup direction="horizontal"  >

                    <ResizablePanel className=" ">
                        <div className=" pb-5 w-full h-full  flex flex-col items-center justify-start gap-4 overflow-y-scroll scrollbar2 min-w-[370px] ">
                            <div className="w-11/12 p-4 rounded-md border-slate-400 text-center text-violet-600 font-bold text-2xl border   mt-5">K-Queen Problem</div>
                            <div className="w-11/12  rounded-2xl border border-slate-700 text-left  p-4"><span className="font-bold text-slate-500">Description :</span> <br /><span>{desc}</span></div>
                            <div className="w-11/12 rounded-2xl  border border-slate-700 text-left  p-4">
                                <span className=" text-slate-500 font-bold">Example 1 :</span><br />
                                Input: nums = [2,7,11,15], target = 9<br />
                                Output: [0,1]<br />
                                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                            </div>
                            <div className="w-11/12  rounded-2xl  border border-slate-700 text-left  p-4">
                                <span className=" text-slate-500 font-bold">Example 2 :</span><br />
                                Input: nums = [2,7,11,15], target = 9<br />
                                Output: [0,1]<br />
                                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                            </div>
                            <div className="w-11/12  rounded-2xl  border border-slate-700 text-left  p-4">
                                <span className=" text-slate-500 font-bold">Example 3 :</span><br />
                                Input: nums = [2,7,11,15], target = 9<br />
                                Output: [0,1]<br />
                                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                            </div>



                        </div>

                    </ResizablePanel>

                    <ResizableHandle withHandle className="opacity-40" />

                    <ResizablePanel className="">
                        <ResizablePanelGroup className="w-full" direction="vertical">
                            <div className={loginbg + "relative h-full  w-full  text-white text-9xl flex flex-col gap-3 items-center justify-center"}>
                                <div className=" animate-bounce duration-1000"><FaLaptopCode className="z-10" /></div>
                                <div className="z-10 text-[13px]"><span className="text-violet-500">Log In</span> to start solving problems</div>
                                <div className="bg-[url('/images/code.png')] bg-cover z-0 w-full h-full absolute brightness-[0.45] opacity-40 top-0 left-0"></div>
                            </div>
                            <ResizablePanel className=" w-full">
                                <div className=" border-0 pl-2 scrollbar2 border-blue-400 h-[98%] overflow-y-scroll">
                                    <CodeEditor setoutputs={setoutputs} inputs={inputs} />
                                </div>
                            </ResizablePanel>

                            <ResizableHandle withHandle className="opacity-40" />

                            <ResizablePanel className=" ">
                                <div className="min-w-[300px]">
                                    <Tabs defaultValue="case1" className=" w-full ">
                                        <TabsList className=" px-7 py-10">
                                            <TabsTrigger value="case1">Case 1</TabsTrigger>
                                            <TabsTrigger value="case2">Case 2</TabsTrigger>
                                            <TabsTrigger value="case3">Case 3</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="case1" className="flex flex-col items-center justify-center gap-5   px-7 m-0 ">

                                            <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Input : {inputs[0]} </div>
                                            {
                                                outputs && <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Output : {outputs[inputs[0]][0]} </div>

                                            }

                                            {
                                                //@ts-ignore
                                                outputs && <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Stdout :<br />{outputs[inputs[0]][1]} </div>


                                            }


                                        </TabsContent>
                                        <TabsContent value="case2" className="flex flex-col items-center justify-center gap-5   px-7 m-0 ">
                                            <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Input : {inputs[1]} </div>
                                            {
                                                outputs && <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Output : {outputs[inputs[1]][0]} </div>

                                            }

                                            {
                                                //@ts-ignore
                                                outputs && <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Stdout :<br />{outputs[inputs[1]][1]} </div>

                                            }
                                        </TabsContent>
                                        <TabsContent value="case3" className="flex flex-col items-center justify-center gap-5   px-7 m-0 ">
                                            <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Input : {inputs[2]} </div>
                                            {
                                                outputs && <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Output : {outputs[inputs[2]][0]} </div>

                                            }

                                            {
                                                //@ts-ignore
                                                outputs && <div className="w-full  border rounded-lg color1 p-4 border-slate-700"> Stdout :<br />{outputs[inputs[2]][1]} </div>

                                            }
                                        </TabsContent>


                                    </Tabs>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </div>

        </div >
    );
}