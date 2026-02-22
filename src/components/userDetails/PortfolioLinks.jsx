import React from 'react'

function PortfolioLinks() {
    return (
        <div className="links flex gap-4">
            <div className="select-none githubLink bg-blue-600/30 p-3 rounded-xl cursor-pointer hover:bg-blue-700/50 transition-color duration-300 border-2 border-blue-900/60">
                GitHub Profile
            </div>
            <div className="select-none linkedinLink  p-3 rounded-xl cursor-pointer hover:bg-blue-800/20 transition-color duration-300 border-2 border-blue-900/60">
                LinkedIn Profile
            </div>
        </div>
    )
}

export default PortfolioLinks