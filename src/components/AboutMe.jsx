import React from 'react'

function AboutMe() {
    return (
        <>
            <div className='my-20 mx-auto flex flex-col lg:flex-row justify-center items-center w-[80%] h-fit rounded-4xl px-1 lg:px-4 py-10' id='about'>
                <div className="leftAbout w-full lg:w-[30%] h-full flex lg:mx-10 my-6 lg:my-0 justify-center flex-col">
                    <div className="headerAbout text-blue-600 my-2 space400">
                        ABOUT ME
                    </div>
                    <div className="aboutText1 text-white text-3xl space900">
                        Bridging the gap between
                    </div>
                    <div className="aboutText2 text-white/40 space900 text-3xl">
                        design & code.
                    </div>
                </div>
                <div className="rightAbout w-full lg:w-[70%] h-full flex lg:mx-10 my-10 lg:my-0 justify-center flex-col">
                    <div className="aboutRightTop text-white/70 text-lg">
                        Aerospace Engineering graduate and Full-Stack Developer with a background in building production-grade React applications.
                        Recently completed an intensive technical residency developing AI-integrated pipelines (LLMs) and offline-first architectures.
                    </div>
                    <br />
                    <div className="aboutRightTop text-white/70 text-lg">
                        Apart from IT, scored in the top percentile of national analytical exams, bringing elite problem-solving discipline to scalable web development.
                    </div>
                    <hr className='border-blue-600/30 mr-3 my-4 ' />
                    <div className="aboutRightBottom flex w-full gap-6 lg:gap-20">
                        <div className="xpCount">
                            <div className="xpNumber text-white space900 lg:text-3xl text-2xl">06+</div>
                            <div className="xpText text-white/40 text-sm">MONTHS EXP.</div>
                        </div>
                        <div className="projectsCount">
                            <div className="projectsNumber text-white space900 lg:text-3xl text-2xl">20+</div>
                            <div className="projectsText text-white/40 text-sm">PROJECTS BUILT</div>
                        </div>
                        <div className="commitmentCount">
                            <div className="commitmentNumber text-white space900 lg:text-3xl text-2xl">100%</div>
                            <div className="commitmentText text-white/40 text-sm">COMMITMENT</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe