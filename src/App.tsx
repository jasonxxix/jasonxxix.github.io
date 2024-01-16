import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import { EmptyLanding } from './components/Landing';
import Projects from './components/Projects';
import { Tab, User } from './App.type';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  const Landing = React.lazy(()=>import('./components/Landing'))
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
        <Suspense fallback={<><Loading /><EmptyLanding /></>}>
          <Landing />
        </Suspense>
        {tabs.map(({ sectionId, Component})=><section key={sectionId} id={sectionId}>{Component}</section>)}
        <Footer user={user} />
      </div>
    </>
  );
}

export default App;

const Loading = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 100;
  opacity: 85%;
`
