import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import AboutMe from './components/AboutMe';
import CareerPath from './components/CareerPath';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import UserDetails from './components/UserDetails';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const handleScroll = () => {
    setIsScrolling(true);

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Hide scrollbar after 1 second of inactivity
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <>
      <NavBar />
      <div
        onScroll={handleScroll}
        className={`p-0 m-0 antialiased bg-linear-to-br w-dvw h-dvh overflow-y-scroll overflow-x-hidden from-black via-[black/80, blue-950, blue-800, violet-800] to-violet-950 hide-scrollbar ${isScrolling ? 'show-scrollbar' : ''}`}
      >
        <UserDetails />
        <AboutMe />
        <TechStack />
        <CareerPath />
        <Projects />
      </div>
    </>
  );
}

export default App;
