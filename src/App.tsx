import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Landing from './components/Landing';
import Projects from './components/Projects';
import { Tab, User } from './App.type';

function App() {
  const tabs: Tab[] = [
    { text: "About Me", sectionId: "about-me", Component: <AboutMe />}, 
    { text: "Skills", sectionId: "skills", Component: <Skills />}, 
    { text: "Projects", sectionId: "projects", Component: <Projects />}];
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
        {tabs.map(({ sectionId, Component})=><section key={sectionId} id={sectionId}>{Component}</section>)}
      </div>
    </>
  );
}

export default App;
