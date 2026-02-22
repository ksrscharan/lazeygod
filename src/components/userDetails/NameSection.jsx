import React from 'react'

function NameSection() {
    return (
        <div className="relative name z-1 w-fit h-fit">
            <div className="absolute w-full h-[50%] top-[30%] border-red-500 bg-blue-500 z-[-1] blur-[90px] rounded-3xl animate-pulse"></div>
            <div className="name1 text-[52px] leading-13 space900 text-white/50">
                SREERAMA
            </div>
            <div className="name2 text-[52px] leading-13 space900 text-white/85">
                SUBRAMANYA
            </div>
            <div className="name3 text-[52px] leading-13 space900 text-white">
                CHARAN K
            </div>
        </div>
    )
}

export default NameSection