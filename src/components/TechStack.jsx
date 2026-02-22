import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";


function TechStack() {
    return (
        <>
            <div className='my-20 mx-auto flex flex-col justify-center items-center w-[80%] h-fit rounded-4xl px-1 lg:px-4 py-10' id='skills'>
                <div className="top w-full">
                    <div className="headerAbout text-blue-600 my-2 space400">
                        TECHNICAL STACK
                    </div>
                    <div className="aboutText1 text-white text-3xl space900 ">
                        Core Technologies
                    </div>
                    <div className="aboutText2 text-white/40 space400">
                        A curated selection of tools used to build robust applications.
                    </div>
                </div>
                <div className="bottom w-full flex gap-6 flex-wrap text-white my-10">
                    <div className="tech-card h-40 w-35 rounded-xl flex flex-col items-center justify-center border-2 border-blue-700/50 hover:border-blue-600/60 transition-colors duration-300 cursor-pointer hover:bg-blue-800/30">
                        <FaReact className='text-3xl h-[40%] text-blue-400' />
                        <div className='text-md space400 h-fit'>
                            React
                        </div>
                        <div className="tech-desc text-xs text-white/40 text-center">
                            Hooks, Reusable components
                        </div>
                    </div>
                    <div className="tech-card h-40 w-35 rounded-xl flex flex-col items-center justify-center border-2 border-blue-700/50 hover:border-blue-600/60 transition-colors duration-300 cursor-pointer hover:bg-blue-800/30">
                        <SiTypescript className='text-3xl h-[40%] text-blue-700' />
                        <div className='text-md space400 h-fit'>
                            Typescript
                        </div>
                        <div className="tech-desc text-xs text-white/40 text-center">
                            Strict Typing & Generics
                        </div>
                    </div>
                    <div className="tech-card h-40 w-35 rounded-xl flex flex-col items-center justify-center border-2 border-blue-700/50 hover:border-blue-600/60 transition-colors duration-300 cursor-pointer hover:bg-blue-800/30">
                        <RiTailwindCssFill className='text-3xl h-[40%] text-blue-500' />
                        <div className='text-md space400 h-fit'>
                            Tailwind CSS
                        </div>
                        <div className="tech-desc text-xs text-white/40 text-center">
                            Custom Configs
                        </div>
                    </div>
                    <div className="tech-card h-40 w-35 rounded-xl flex flex-col items-center justify-center border-2 border-blue-700/50 hover:border-green-400/60 transition-colors duration-300 cursor-pointer hover:bg-green-400/30">
                        <FaNodeJs className='text-3xl h-[40%] text-green-400' />
                        <div className='text-md space400 h-fit'>
                            Node.Js
                        </div>
                        <div className="tech-desc text-xs text-white/40 text-center">
                            Server-side Javascript
                        </div>
                    </div>
                    <div className="tech-card h-40 w-35 rounded-xl flex flex-col items-center justify-center border-2 border-blue-700/50 hover:border-white/60 transition-colors duration-300 cursor-pointer hover:bg-white/30">
                        <SiExpress className='text-3xl h-[40%]' />
                        <div className='text-md space400 h-fit'>
                            Express.Js
                        </div>
                        <div className="tech-desc text-xs text-white/40 text-center">
                            Web Framework
                        </div>
                    </div>
                    <div className="tech-card h-40 w-35 rounded-xl flex flex-col items-center justify-center border-2 border-blue-700/50 hover:border-green-600/60 transition-colors duration-300 cursor-pointer hover:bg-green-800/30">
                        <SiMongodb className='text-3xl h-[40%] text-green-800' />
                        <div className='text-md space400 h-fit'>
                            MongoDB
                        </div>
                        <div className="tech-desc text-xs text-white/40 text-center">
                            NoSQL Database
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TechStack