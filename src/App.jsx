import './App.css'
import AboutMe from './components/AboutMe';
import CareerPath from './components/CareerPath';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <>
      <NavBar />
      <div className='p-0 m-0 antialiased bg-linear-to-br w-dvw h-dvh overflow-scroll from-black via-[black/80, blue-950, blue-800, violet-800] to-violet-950'>
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
