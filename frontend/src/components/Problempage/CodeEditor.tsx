"use client";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { AiOutlinePython } from "react-icons/ai";

import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-solarizedlight.css";

//@ts-ignore
const CodeEditor = ({ setoutputs, inputs, setrerender }) => {
    const [submission_id, setSubmissionId] = useState(null);
    const { toast } = useToast();
    const [executing, setexecuting] = useState(false);
    const [code, setCode] = useState(
        `'''You can define other functions before Solution functions'''\n'''Write your code inside this Solution function and must return the answer'''\n\ndef Solution(input):\n\n\n\n\n\n\n\n    return input\n`
    );
    // const [code, setCode] = useState("print(10)");
    // console.log(inputs);
    let outputs: any = {};

    const showtoast = (heading: string, desc: string) => {
        toast({
            title: heading,
            description: desc,
        });
    };
    useEffect(() => {
        if (!submission_id) return;

        const interval = setInterval(async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SUBMIT_CODE_API}/status/${submission_id}`
                );
                const data = await res.json();
                console.log(data);
                if (data.status === "executed") {
                    if (data.stderr) {
                        if (data.exit_code === 124) {
                            showtoast("Time Limit Exceeded", data.stderr);
                        } else {
                            showtoast("Error in Code Execution", data.stderr);
                        }
                    }

                    setexecuting(false);
                    setSubmissionId(null);
                    setoutputs(data.stdout);
                    setrerender((prev: any) => prev + 1);
                    clearInterval(interval);
                }
            } catch (err) {
                console.error("Polling error:", err);
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            setexecuting(false);
        };
    }, [submission_id]);

    const runcode = async (code: string) => {
        setexecuting(true);
        try {
            const url = process.env.NEXT_PUBLIC_SUBMIT_CODE_API + "/submit";

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code: code,
                    inputs: inputs,
                }),
            };

            const response = await fetch(url, options);

            const result = await response.json();
            setSubmissionId(result.submission_id);
        } catch (error) {
            showtoast(
                "Code Execution Server not Responding",
                "Please try in 1 minute"
            );
            setoutputs(null);
            console.log(error);
            setexecuting(false);
        }
    };

    return (
        <div>
            <div className=" flex items-center justify-center gap-1  w-full pt-2 ">
                {!executing && (
                    <div className="flex gap-2 h-8">
                        <button
                            onClick={() => runcode(code)}
                            className="border border-white border-opacity-50  font-thin  hover:font-medium text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm"
                        >
                            SUBMIT
                        </button>

                        <div className="absolute right-5 text-4xl text-white animate-pulse">
                            <AiOutlinePython />
                        </div>
                    </div>
                )}
                {executing && (
                    <div className="h-8 pt-1">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
            <Editor
                className="border-l border-slate-500 border-opacity-35"
                value={code}
                onValueChange={(code) => setCode(code)}
                highlight={(code) => highlight(code, languages.js)}
                padding={5}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 15,
                }}
                textareaClassName={"bg-red-300 shadow-sm"}
                tabSize={4}
            />
        </div>
    );
};

export default CodeEditor;
