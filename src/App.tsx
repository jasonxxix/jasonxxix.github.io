import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Landing from './components/Landing';
import Projects from './components/Projects';
import { Tab, User } from './App.type';
import Footer from './components/Footer';

function App() {
  const tabs: Tab[] = [
    { text: "About Me", sectionId: "about-me", Component: <AboutMe />}, 
    { text: "Skills", sectionId: "skills", Component: <Skills />}, 
    { text: "Projects", sectionId: "projects", Component: <Projects />}];
  const user: User = {
    name: "Jason Raymond Reyes",
    position: "Full Stack Developer",
    src: "./images/avatar.jpg",
    linkdn: "https://www.linkedin.com/in/jasonraymondreyes/",
    github: "https://github.com/jasonxxix/",
  }
  

  return (
    <>
      <Navbar tabs={tabs} user={user} />
      <div className="App bg-slate-50 dark:bg-cyan-900">
        <Landing />
        {tabs.map(({ sectionId, Component})=><section key={sectionId} id={sectionId}>{Component}</section>)}
        <Footer user={user} />
      </div>
    </>
  );
}

export default App;
