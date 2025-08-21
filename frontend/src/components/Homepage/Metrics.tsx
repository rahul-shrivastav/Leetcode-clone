// @ts-nocheck
'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Metrics = ({ hprobs, eprobs, mprobs }) => {
    const session = useSession()

    useEffect(() => {

        var forEach = function (array: any, callback: any, scope: any) {
            for (var i = 0; i < array.length; i++) {
                callback.call(scope, i, array[i]);
            }
        };
        const helper = () => {
            var max = 2160;

            forEach(document.querySelectorAll('.progress'), function (index: any, value: any) {
                let percent = value.getAttribute('data-progress');
                value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
                if (session.status === 'authenticated') {
                    value.querySelector('.value').innerHTML = percent + '%';
                } else {
                    value.querySelector('.value').innerHTML = 'Na';
                }
            }, 1);
        }
        helper()
    }, [session])


    return (
        <div className="  flex flex-col rounded-md items-center justify-center    w-full shadow-slate-900 border h-full border-slate-600 border-opacity-50 shadow-2xl   p-10 ">
            <div className=" 2xl:text-2xl  text-4xl font-thin relative -top-10 max-[600px]:text-[15px] text-center ">Your Progress</div>

            <div className="flex    scale-100 max-[800px]:scale-[0.8] max-[600px]:scale-[0.6]   max-[600px]:relative max-[600px]:flex-col max-[600px]:top-4 min-[1495px]:scale-[0.9] h-96 items-center justify-center gap-4">
                {/* esy */}
                <div id="wrapper" className="center relative -top-20 max-[600px]:top-0 animate-pulse">
                    <svg className="progress blue noselect" data-progress={session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).eprobsolved / eprobs * 100 : 100} x="0px" y="0px" viewBox="0 0 776 628">
                        <path className="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <path className="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <text className="value" x="50%" y="61%">0%</text>
                    </svg>
                </div>
                {/* hard */}
                <div id="wrapper" className="center scale-[1.2] max-[600px]:scale-[1.4] animate-pulse aduration  ">
                    <svg className="progress blue2 noselect" data-progress={session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).hprobsolved / hprobs * 100 : 100} x="0px" y="0px" viewBox="0 0 776 628">
                        <path className="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <path className="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <text className="value" x="50%" y="61%">0%</text>
                    </svg>
                </div>
                {/* med */}
                <div id="wrapper" className="center relative -top-20 max-[600px]:top-0 animate-pulse "  >
                    <svg className="progress blue3 noselect" data-progress={session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).mprobsolved / mprobs * 100 : 100} x="0px" y="0px" viewBox="0 0 776 628">
                        <path className="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <path className="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
                        <text className="value" x="50%" y="61%">0%</text>
                    </svg>
                </div>
            </div>

            <div className="flex 2xl:scale-90 flexj-col items-center justify-around w-full max-[700px]:scale-[0.8] max-[800px]:flex-col max-[800px]:scale-[0.8] max-[602px]:relative max-[602px]:top-14  gap-3">
                <div className=" flex items-center justify-center gap-2 border p-4 border-slate-700 ">
                    <div className=" flex items-center justify-center gap-2"><div className="w-4 h-4  bg-violet-300"></div> Easy -</div>
                    <div>{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).eprobsolved : 0} / {eprobs}</div>
                </div>
                <div className=" flex items-center justify-center gap-2 border p-4 border-slate-700">
                    <div className=" flex items-center justify-center gap-2"><div className="w-4 h-4  bg-violet-900"></div> Hard -</div>
                    <div>{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).hprobsolved : 0} / {hprobs}</div>
                </div>
                <div className=" flex items-center justify-center gap-2 border p-4 border-slate-700">
                    <div className=" flex items-center justify-center gap-2"><div className="w-4 h-4  bg-violet-500"></div> Medium -</div>
                    <div>{session.status === 'authenticated' ? (JSON.parse(localStorage.getItem('user'))).mprobsolved : 0} / {mprobs}</div>
                </div>

            </div>

        </div>
    );
}

export default Metrics;