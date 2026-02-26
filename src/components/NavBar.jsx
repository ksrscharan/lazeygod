import React from 'react'
import { FaReact } from "react-icons/fa";


function NavBar() {
    return (
        <>
            <div className="navbar w-full absolute top-6 z-5">
                <div className="flex backdrop-blur-xs space-grotesk items-center w-fit mx-auto py-0.5 px-6 font-extrabold text-sm text-white/80 justify-center lg:gap-9 gap-3.5 md:gap-10 bg-black/30 border-2 border-blue-500/20 box-border rounded-[64px]">
                    <a href="#about" className="about cursor-pointer hover:text-white transition-colors duration-300 hover:animate-pulse decoration-none">
                        About
                    </a>
                    <a href="#projects" className="work cursor-pointer hover:text-white transition-colors duration-300 hover:animate-pulse decoration-none">
                        Works
                    </a>
                    <div className="icon my-1.5 flex items-center bg-[#2559f4] p-3 rounded-4xl shadow-[#2559f4]/40 bg-blend-color-burn animate-spin font-extrabold">
                        <FaReact size={'18px'} />
                    </div>
                    <a href="#skills" className="skills cursor-pointer hover:text-white transition-colors duration-300 hover:animate-pulse decoration-none">
                        Skills
                    </a>
                    <a href="#career" className="contacts cursor-pointer hover:text-white transition-colors duration-300 hover:animate-pulse decoration-none">
                        Career
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar