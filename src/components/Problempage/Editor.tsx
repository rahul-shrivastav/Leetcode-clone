'use client'
import { useEffect, useState } from "react";



const Editor = ({ onchange, value, language }: any) => {

    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const handlechange = (editor: any, data: any, value: any) => {
        onchange(value)
    }
    return (
        <>
            {domLoaded && < div className="h-full scrollbar2 ">

            </div>}
        </>
    );
}

export default Editor;