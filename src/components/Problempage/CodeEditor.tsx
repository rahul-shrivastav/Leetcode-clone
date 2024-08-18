'use client'
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useEffect, useState } from "react";

import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';

import 'prismjs/themes/prism-solarizedlight.css';
// import 'prismjs/themes/prism-funky.css';

const CodeEditor = () => {
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
    );


    return (
        <div>
            <div className=" flex   items-center justify-center gap-1  w-full pt-2 ">
                <button className="border   text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">Run</button>
                <button className="border  text-white hover:bg-white hover:text-black w-24  py-1 rounded-sm">Submit</button>
                <div className="absolute right-5 scale-[0.9]">

                    <Select defaultValue="python">
                        <SelectTrigger className="w-[100px] bg-black outline-none focus:outline-none">
                            <SelectValue placeholder="" className="border-none outline-none" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="cpp">C++</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

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