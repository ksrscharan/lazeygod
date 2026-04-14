import React from 'react'

function WorkStatus() {
    return (
        <div className="workStatus h-6 border w-45 items-center flex justify-evenly border-green-700/50 rounded-xl bg-green-800/25">
            <div className='h-3 w-3 bg-green-300/60 rounded-4xl animate-pulse'></div>
            <div className="workStatusText text-green-300/70 font-extrabold">
                OPEN TO WORK
            </div>
        </div>
    )
}

export default WorkStatus