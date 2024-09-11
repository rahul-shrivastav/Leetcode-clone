'use client'
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { AiOutlinePython } from "react-icons/ai";

import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-solarizedlight.css';

const CodeEditor = () => {
    const { toast } = useToast()
    const [executing, setexecuting] = useState(false);
    const [token, settoken] = useState('')
    const [code, setCode] = useState(`def Solution():\n\t#'''You can define other functions before Solution functions'''\n\t#'''Write your code inside this Solution function and must return the answer'''\n\n\n\treturn\n\nprint(Solution())`);
    useEffect(() => {
        settoken('')
    }, [code])

    const fetchresults = async (tokenn: any) => {
        if (!tokenn) {
            return
        }
        setexecuting(true)
        console.log('fcalled')
        const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenn}?base64_encoded=true&fields=*`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_2,
                // 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_1, //gai
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
            }
        };

        try {
            // @ts-ignore
            const response = await fetch(url, options)
            const result = await response.json()
                .then((result) => {
                    setexecuting(false);
                    console.log(result)
                    console.log(tokenn)
                    if (result.source_code) {
                        toast({
                            title: `${result.status.description}`,
                            description: '',
                        })
                    }
                })


        } catch (error) {
            setexecuting(false)
            toast({
                title: `${error}`,
                description: `fetcherror There will be no longer submissions on Judge0 server. Try tomorrow.`,
            })
        }
    }

    const submitCode = async (code: any, expected: string = '2') => {
        try {
            if (token) {
                let result = await fetchresults(token)
            }
            else {
                console.log('scalled')
                const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';

                const options = {
                    method: 'POST',
                    headers: {
                        // 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_1, //gai
                        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_2,
                        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        language_id: 92,
                        source_code: btoa(code),
                        expected_output: btoa(expected),
                    })
                }

                // @ts-ignore
                const response = await fetch(url, options);
                const data = await response.json()
                    .then((data) => {
                        console.log(data)
                        if (data.message) {
                            toast({
                                title: `Daily Submission Limit Reached`,
                                description: ` There will be no longer submissions on Judge0 server. Try tomorrow.`,
                            })

                        }
                        else {

                            settoken(data.token);
                        }
                    })
                    .then(async () => {
                        let result = await fetchresults(token)
                    })
            }

        } catch (error) {
            toast({
                title: `${error}`,
                description: `${error}`,
            })
        }
    }


    return (
        <div>
            <div className=" flex   items-center justify-center gap-1  w-full pt-2 ">
                {!executing &&
                    <div className="flex gap-2 h-8">
                        <button onClick={() => { submitCode(code) }} className="border border-white border-opacity-50  font-thin  hover:font-medium text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">SUBMIT</button>
                        {/* <button onClick={() => { fetchresults(token); }} className="border  text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">Submit</button> */}

                        <div className="absolute right-5 text-4xl text-white">
                            <AiOutlinePython />




                        </div>

                    </div>
                }
                {executing && <div className="h-8 pt-1"><div className="loader"></div></div>

                }

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