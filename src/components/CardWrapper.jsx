import React from 'react'

function CardWrapper({ children }) {
    return (
        <div className='flex flex-col md:flex-row mt-25 text-white userCard mx-auto w-[95dvw] lg:w-280 border-2 lg:h-140 border-blue-700/30 rounded-4xl bg-linear-to-tr from-blue-900/5 to-blue-700/15'>
            {children}
        </div>
    )
}

export default CardWrapper