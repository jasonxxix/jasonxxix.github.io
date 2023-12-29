import React from 'react';
import './App.css';
import Header from './components/Header';

export interface User {
  name: string;
  position: string;
  src: string;
} 

function App() {
  const Tabs: string[] = ["About Me", "Skills", "Projects"];
  const User: User = {
    name: "Jason Raymond Reyes",
    position: "Full Stack Developer",
    src: "./images/person.jpg",
  } 

  return (
    <>
      <Header Tabs={Tabs} User={User} />
      <div className="App"></div>
    </>
  );
}

export default App;
