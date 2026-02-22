import React, { useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function Projects() {
    const [activeCategory, setActiveCategory] = useState("Javascript")
    const [projects, setProjects] = useState({

    })
    return (
        <div className='mx-auto flex flex-col items-center w-[95%] md:w-[80%] h-dvh rounded-4xl px-1 lg:px-4 py-10' id='projects'>
            <div className="top w-full">
                <div className="headerAbout text-blue-600 my-2 space400">
                    PROJECTS
                </div>
                <div className="aboutText1 text-white text-3xl space900 ">
                    2022 - Present
                </div>

            </div>
            <div className="flex flex-wrap w-full gap-3 justify-between items-center my-3">

                <div className="projectCard border-2 border-blue-600/40 w-[1080px] h-[720px] flex flex-col relative"
                // style={{ transform: "scale(80%)" }}

                >
                    <iframe
                        src={"https://lazeystore.vercel.app"}
                        title={"LazeyStore"}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="projectCard border-2 border-blue-600/40 h-[720px] w-[360px] flex flex-col relative"
                // style={{ transform: "scale(80%)" }}

                >
                    <iframe
                        src={"https://lazeymovies.netlify.app"}
                        title={"LazeyStore"}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="projectCard border-2 border-blue-600/40 h-[720px] w-[360px] flex flex-col relative"
                // style={{ transform: "scale(80%)" }}

                >
                    <iframe
                        src={"https://lazeygod.netlify.app"}
                        title={"LazeyStore"}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="projectCard border-2 border-blue-600/40 w-[1080px] h-[720px] flex flex-col relative"
                // style={{ transform: "scale(80%)" }}

                >
                    <iframe
                        src={"https://lazeymarkdown.netlify.app"}
                        title={"LazeyStore"}
                        width="100%"
                        height="100%"
                    />
                </div>

            </div>

        </div>
    )
}

export default Projects