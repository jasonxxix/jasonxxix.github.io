import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Landing from './components/Landing';

export interface User {
  name: string;
  position: string;
  src: string;
} 

function App() {
  const tabs: string[] = ["About Me", "Skills", "Projects"];
  const user: User = {
    name: "Jason Raymond Reyes",
    position: "Full Stack Developer",
    src: "./images/avatar.jpg",
  }
  

  return (
    <>
      <Navbar tabs={tabs} user={user} />
      <div className="App bg-amber-50 dark:bg-cyan-900">
        <Landing />
        <AboutMe />
        <Skills />
      </div>
    </>
  );
}

export default App;
