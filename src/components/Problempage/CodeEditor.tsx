'use client'
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-solarizedlight.css';

const CodeEditor = () => {
    const { toast } = useToast()
    const showtoast = (title = 'Passed ', desc = 'The output of one of the test do not matched with the expected output') => {
        toast({
            title: `${title}`,
            description: `${desc}`,
        })
    }

    const [executing, setexecuting] = useState(true);
    const token = "957f66ba-dc4a-4919-abc0-de4e0cfec8d2"
    const [lang, setlang] = useState('52')
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );

    const fetchresults = async (token: any) => {
        console.log(lang)
        const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8017456fe0msh773044845ff0a38p101950jsn343e77d7b0ce',
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const submitCode = async (code: any) => {
        const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '8017456fe0msh773044845ff0a38p101950jsn343e77d7b0ce',
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                language_id: 92,
                source_code: btoa(code),
                expected_output: "hello, world",
                // time: "0.001",
                // memory: 376,
            })
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json()
            const result = await fetchresults(data.token)
            console.log(result)
        } catch (error) {
            console.error(error);
        }

    }



    return (
        <div>
            <div className=" flex   items-center justify-center gap-1  w-full pt-2 ">
                {!executing &&
                    <div className="flex gap-2 h-8">
                        <button onClick={() => { submitCode(code) }} className="border   text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">Run</button>
                        <button onClick={() => { fetchresults(token); showtoast() }} className="border  text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">Submit</button>

                        <div className="absolute right-5 scale-[0.9]">

                            <Select onValueChange={(value) => { setlang(value); }} defaultValue={lang}>
                                <SelectTrigger className="w-[100px] bg-black outline-none focus:outline-none">
                                    <SelectValue placeholder="" className="border-none outline-none" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="92">Python</SelectItem>
                                    <SelectItem value="52">C++</SelectItem>
                                    <SelectItem value="91">Java</SelectItem>
                                </SelectContent>
                            </Select>
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