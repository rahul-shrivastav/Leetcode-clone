'use client'
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { AiOutlinePython } from "react-icons/ai";

import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-solarizedlight.css';

//@ts-ignore
const CodeEditor = ({ setoutputs, inputs }) => {
    const { toast } = useToast()
    const [executing, setexecuting] = useState(false);
    const [code, setCode] = useState(`'''You can define other functions before Solution functions'''\n'''Write your code inside this Solution function and must return the answer'''\n\ndef Solution(input):\n\n\n\n\n\n\n\n    return input\n`);

    let outputs: any = {};

    const showtoast = (heading: string, desc: string) => {
        toast({
            title: heading,
            description: desc
        })
    }

    const runcode = async (code: string, inputs: string) => {
        let acode = code + `\nprint(f'@{Solution(${inputs})}')`
        if (!code) {
            acode = '';
        }
        try {
            const url = process.env.NEXT_PUBLIC_SUBMIT_CODE_API2 + '/execute';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "code": acode
                })
            };
            setexecuting(true)

            const response = await fetch(url, options);

            const result = await response.json();
            // console.log(result)
            if (result.output) {
                let idx = result.output.indexOf('@')
                setexecuting(false)

                if (result.output.slice(0, idx)) {
                    return [result.output.slice(idx + 1), result.output.slice(0, idx)]
                } else {
                    return [result.output.slice(idx + 1), 'No Standard Output']
                }
            }
            if (result.error) {
                setoutputs(null)
                showtoast(result.error, result.details)
            }
            setexecuting(false)

        } catch (error) {
            showtoast("Code Execution Server not Responding", 'Please try in 1 minute')
            setoutputs(null)
            console.log(error)
            setexecuting(false)
        }

    }
    const fetchoutputs = async () => {
        let v1 = await runcode(code, inputs[0])
        if (v1) {
            outputs[inputs[0]] = v1;
            let v2 = await runcode(code, inputs[1]);
            if (v2) {
                outputs[inputs[1]] = v2;
                let v3 = await runcode(code, inputs[2]);
                if (v3) {
                    outputs[inputs[2]] = v3;
                }
            }
        }
        if (Object.keys(outputs).length < 3) {
            setoutputs(null)
        } else {
            setoutputs(outputs)
        }

    }

    return (
        <div>
            <div className=" flex items-center justify-center gap-1  w-full pt-2 ">
                {!executing &&
                    <div className="flex gap-2 h-8">
                        <button onClick={fetchoutputs}
                            className="border border-white border-opacity-50  font-thin  hover:font-medium text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">
                            SUBMIT</button>

                        <div className="absolute right-5 text-4xl text-white animate-pulse">
                            <AiOutlinePython />

                        </div>

                    </div>
                }
                {executing && <div className="h-8 pt-1"><div className="loader"></div></div>}

            </div>
            <Editor
                className="border-l border-slate-500 border-opacity-35"
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
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

}

export default CodeEditor;