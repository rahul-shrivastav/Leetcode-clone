'use client'
import { useEffect } from "react";

const Metrics = (props: any) => {
    useEffect(() => {

        var forEach = function (array: any, callback: any, scope: any) {
            for (var i = 0; i < array.length; i++) {
                callback.call(scope, i, array[i]);
            }
        };
        const h = () => {
            var max = 2160;
            forEach(document.querySelectorAll('.progress'), function (index: any, value: any) {
                let percent = value.getAttribute('data-progress');
                value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
                value.querySelector('.value').innerHTML = percent + '%';
            }, 1);
        }
        h()
    }, [props.easy, props.med, props.hard])


    return (
        <div className="  flex flex-col rounded-md items-center justify-center    w-full shadow-slate-900 border h-full border-violet-800 border-opacity-50 shadow-2xl   p-10 ">
            <div className=" 2xl:text-2xl  text-4xl font-thin relative -top-10 max-[600px]:bg-blue-400 text-center border border-white">Your Progress</div>

            <div className="flex   scale-100 max-[800px]:scale-[0.8] max-[600px]:scale-[0.6]   max-[600px]:relative max-[600px]:flex-col max-[600px]:top-4 min-[1495px]:scale-[0.9] h-96 items-center justify-center gap-4">
                {/* esy */}
                <div id="wrapper" className="center relative -top-20 max-[600px]:top-0">
                    <svg className="progress blue noselect" data-progress={44} x="0px" y="0px" viewBox="0 0 776 628">
                        <path className="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <path className="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <text className="value" x="50%" y="61%">0%</text>
                    </svg>
                </div>
                {/* med */}
                <div id="wrapper" className="center scale-[1.2] max-[600px]:scale-[1.4]">
                    <svg className="progress blue2 noselect" data-progress={props.hard} x="0px" y="0px" viewBox="0 0 776 628">
                        <path className="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <path className="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <text className="value" x="50%" y="61%">0%</text>
                        {/* <text className="text" >Hard</text> */}
                    </svg>
                </div>
                {/* hard */}
                <div id="wrapper" className="center relative -top-20 max-[600px]:top-0">
                    <svg className="progress blue3 noselect" data-progress={props.med} x="0px" y="0px" viewBox="0 0 776 628">
                        <path className="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <path className="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <text className="value" x="50%" y="61%">0%</text>
                        {/* <text className="text" x="50%" y="122%">Medium</text> */}
                    </svg>
                </div>
            </div>

            <div className="flex 2xl:scale-90 flexj-col items-center justify-around w-full max-[700px]:scale-[0.8] max-[800px]:flex-col max-[800px]:scale-[0.8] max-[602px]:relative max-[602px]:top-14  gap-3">
                <div className=" flex items-center justify-center gap-2 border p-4 border-slate-700 ">
                    <div className=" flex items-center justify-center gap-2"><div className="w-4 h-4  bg-violet-300"></div> Easy -</div>
                    <div>{props.easy} / 90</div>
                </div>
                <div className=" flex items-center justify-center gap-2 border p-4 border-slate-700">
                    <div className=" flex items-center justify-center gap-2"><div className="w-4 h-4  bg-violet-900"></div> Hard -</div>
                    <div>{props.easy} / 90</div>
                </div>
                <div className=" flex items-center justify-center gap-2 border p-4 border-slate-700">
                    <div className=" flex items-center justify-center gap-2"><div className="w-4 h-4  bg-violet-500"></div> Medium -</div>
                    <div>{props.easy} / 90</div>
                </div>

            </div>

        </div>
    );
}

export default Metrics;