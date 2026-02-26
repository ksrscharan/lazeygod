import React, { useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function Projects() {
    const projects = [
        {
            title: "LazeyStore",
            description: "A premium e-commerce experience with high-quality product cards and seamless navigation.",
            tech: ["React", "Tailwind", "Vite"],
            link: "https://lazeystore.vercel.app",
            size: "large",
            gradient: "from-blue-600/20 to-violet-600/20"
        },
        {
            title: "LazeyMovies",
            description: "Modern movie streaming dashboard with vibrant highlights and posters.",
            tech: ["React", "API", "Tailwind"],
            link: "https://lazeymovies.netlify.app",
            size: "small",
            gradient: "from-red-600/20 to-orange-600/20"
        },
        {
            title: "LazeyGod",
            description: "Futuristic developer portfolio with integrated charts and tech icons.",
            tech: ["React", "Framer", "Gradients"],
            link: "https://lazeygod.netlify.app",
            size: "small",
            gradient: "from-emerald-600/20 to-cyan-600/20"
        },
        {
            title: "LazeyMarkdown",
            description: "Elegant markdown editor with split-pane view and clean typography.",
            tech: ["React", "Markdown", "Glass"],
            link: "https://lazeymarkdown.netlify.app",
            size: "large",
            gradient: "from-indigo-600/20 to-blue-600/20"
        }
    ]

    return (
        <div className='mx-auto flex flex-col items-center w-[95%] md:w-[80%] min-h-screen rounded-4xl px-1 lg:px-4 py-20' id='projects'>
            <div className="top w-full mb-12">
                <div className="headerAbout text-blue-600 my-2 space400 tracking-widest">
                    PROJECTS
                </div>
                <div className="aboutText1 text-white text-3xl space900 ">
                        Selected Works
                    </div>
                <div className="aboutText2 text-white/40 space400 mt-2">
                    A showcase of my recent applications and creative experiments.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full auto-rows-[300px]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`projectCard group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] cursor-pointer flex flex-col justify-end p-8 ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
                            }`}
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="absolute top-6 right-6 text-white/20 group-hover:text-blue-400 group-hover:rotate-45 transition-all duration-500">
                            <FaExternalLinkAlt size={20} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-[90%]">
                                {project.description}
                            </p>
                        </div>

                        <div className="absolute -inset-[100%] group-hover:inset-0 bg-linear-to-tr from-transparent via-blue-500/5 to-transparent pointer-events-none transition-all duration-1000" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects