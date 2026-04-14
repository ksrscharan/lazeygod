import React from 'react'

function PortfolioLinks() {
    return (
        <div className="links flex gap-4">
            <a href="https://www.github.com/ksrscharan" target="_blank" rel="noopener noreferrer" className="block select-none githubLink bg-blue-600/30 p-3 rounded-xl cursor-pointer hover:bg-blue-700/50 transition-colors duration-300 border-2 border-blue-900/60 no-underline text-inherit">
                GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/ksrscharan" target="_blank" rel="noopener noreferrer" className="block select-none linkedinLink  p-3 rounded-xl cursor-pointer hover:bg-blue-800/20 transition-colors duration-300 border-2 border-blue-900/60 no-underline text-inherit">
                LinkedIn Profile
            </a>
        </div>
    )
}

export default PortfolioLinks