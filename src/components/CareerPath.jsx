import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function CareerPath() {
    const [JTCSkills, setJTCSkills] = useState(["React.Js", "Typescript", "Javascript", "API Integration", "CRUD", "GitHub", "Bootstrap"])
    const [showIndicator, setShowIndicator] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollContainerRef = useRef(null);
    const scrollTimeout = useRef(null);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if (scrollTop + clientHeight >= scrollHeight - 10) {
            setShowIndicator(false);
        } else {
            setShowIndicator(true);
        }

        setIsScrolling(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
        }, 800);
    };

    return (
        <>
            <div className='my-20 mx-auto flex flex-col justify-center items-center w-[95%] md:w-[80%] h-dvh rounded-4xl px-1 lg:px-4 py-10' id='career'>
                <div className="top w-full">
                    <div className="headerAbout text-blue-600 my-2 space400">
                        PROFESSIONAL JOURNEY
                    </div>
                    <div className="aboutText1 text-white text-3xl space900 ">
                        Career Timeline
                    </div>
                    <div className="aboutText2 text-white/40 space400">
                        Here's a look at my professional journey.
                    </div>
                </div>
                <div className='relative h-[80dvh] mx-auto w-full my-5 border-2 border-blue-600/40 rounded-4xl z-1 overflow-hidden group'>
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className='h-full w-full overflow-y-scroll hide-scrollbar scroll-smooth'
                    >
                        <div className="absolute flex flex-col h-330 w-full m-0 p-0 z-[-1]">
                            <div className="absolute h-full  w-full">
                                <div className="mx-[10.5%] md:mx-auto h-full border-2 border-blue-600 w-0 bg-blue-500/50"></div>
                            </div>
                        </div>

                        <div className='flex w-full flex-col pb-32'>
                            <div className="w-full h-60 flex">
                                <div className="leftSection w-0 hidden md:block md:w-[48%] h-full">
                                    <div className="h-full w-full m-auto text-white text-right content-center">2014 - 2015</div>
                                </div>
                                <div className="centralSection h-full w-[4%] content-center m-auto">
                                    <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl relative'>
                                        <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl absolute animate-ping z-2'></div>
                                    </div>
                                </div>
                                <div className="rightSection h-full w-[78%] md:w-[48%] flex flex-col justify-center">
                                    <div className=' text-2xl md:text-3xl text-blue-500 space900'>
                                        Class X
                                    </div>
                                    <div className='px-2 text-white bg-white/20 w-fit rounded-md border border-white/50 md:hidden'>
                                        2014 - 2015
                                    </div>
                                    <div className='text-sm text-white/60'>
                                        <ol>
                                            <li>Kendriya Vidyalaya - Chennai</li>
                                            <li>GPA - 7.40</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-30 flex">
                                <div className="leftSection w-0 hidden md:block md:w-[48%] h-full">
                                    <div className="h-full w-full m-auto text-white text-right content-center">2016 - 2017</div>
                                </div>
                                <div className="centralSection h-full w-[4%] content-center m-auto">
                                    <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl relative'>
                                        <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl absolute animate-ping z-2'></div>
                                    </div>
                                </div>
                                <div className="rightSection h-full w-[78%] md:w-[48%] flex flex-col justify-center">
                                    <div className=' text-2xl md:text-3xl text-blue-500 space900'>
                                        Class XII
                                    </div>
                                    <div className='px-2 text-white bg-white/20 w-fit rounded-md border border-white/50 md:hidden'>
                                        2016 - 2017
                                    </div>
                                    <div className='text-sm text-white/60'>
                                        <ol>
                                            <li>Kendriya Vidyalaya - Srikakulam</li>
                                            <li>Percentage - 69.2%</li>
                                            <li>Group: PCM + Biology</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-150 flex">
                                <div className="leftSection w-0 hidden md:block md:w-[48%] h-full">
                                    <div className="h-full w-full m-auto text-white text-right content-center">2017 - 2021</div>
                                </div>
                                <div className="centralSection h-full w-[4%] content-center m-auto">
                                    <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl relative'>
                                        <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl absolute animate-ping z-2'></div>
                                        <div className='h-5 w-5 bg-blue-700 blur-lg mx-auto rounded-4xl absolute animate-pulse z-3'></div>
                                    </div>
                                </div>
                                <div className="rightSection h-full w-[78%] md:w-[48%] flex flex-col justify-center">
                                    <div className=' text-2xl md:text-3xl text-blue-500 space900'>
                                        B. Tech - Aerospace
                                    </div>
                                    <div className='px-2 text-white bg-white/20 w-fit rounded-md border border-white/50 md:hidden'>
                                        2017 - 2021
                                    </div>
                                    <div className='text-sm text-white/60'>
                                        <ol>
                                            <li>Bharath University - Chennai</li>
                                            <li>GPA - 8.04 / 10.00</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-80 flex">
                                <div className="leftSection w-0 hidden md:block md:w-[48%] h-full">
                                    <div className="h-full w-full m-auto text-white text-right content-center">June 2022 - Dec 2022</div>
                                </div>
                                <div className="centralSection h-full w-[4%] content-center m-auto">
                                    <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl relative'>
                                        <div className='h-3 w-3 bg-blue-500 mx-auto rounded-4xl absolute animate-ping z-2'></div>
                                        <div className='h-5 w-5 bg-blue-700 blur-lg mx-auto rounded-4xl absolute animate-pulse z-3'></div>
                                    </div>
                                </div>
                                <div className="rightSection h-full w-[78%] md:w-[48%] flex flex-col justify-center">
                                    <div className=' text-2xl md:text-3xl text-blue-500 space900'>
                                        Software Engineer
                                    </div>
                                    <div className='px-2 text-white bg-white/20 w-fit rounded-md border border-white/50 md:hidden'>
                                        June 2022 - Dec 2022
                                    </div>
                                    <div className='text-sm text-white/60'>
                                        <ol>
                                            <li>Better Software (Jalan Technology Consulting)</li>
                                            <li>
                                                Works:
                                                <ul>
                                                    <li>
                                                        - Developed and maintained 3 production-grade projects using React.js and TypeScript, focusing on scalable functional components and React Hooks.
                                                    </li>
                                                    <li>
                                                        - Built 10+ responsive pages and worked on REST API integrations, ensuring seamless data access across mobile and desktop devices.
                                                    </li>
                                                    <li>
                                                        - Built a uniform library of complex, reusable UI components using BaseWeb and Bootstrap, streamlining development speed and maintaining UI consistency.
                                                    </li>
                                                    <li>
                                                        - Built a uniform library of complex, reusable UI components using BaseWeb and Bootstrap, streamlining development speed and maintaining UI consistency.
                                                    </li>
                                                    <li>
                                                        - Integrated Google Maps into web applications for location-based features and interactive user experiences.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <div className="flex flex-wrap gap-3">
                                            {JTCSkills.map(skill => <div className='px-2 text-white bg-white/20 w-fit rounded-md border border-white/50'>{skill}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none flex flex-col items-center justify-end pb-8 transition-all duration-700 ${(!showIndicator || isScrolling) ? 'opacity-0 translate-y-4' : 'opacity-100'}`}>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-blue-500/60 text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
                            <div className="animate-bounce">
                                <FaChevronDown className="text-blue-500/40" size={12} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerPath