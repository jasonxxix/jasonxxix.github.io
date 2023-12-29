import React from 'react';
import './App.css';
import Header from './components/Header';

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
    src: "./images/person.jpg",
  }
  const StyleModes: string[] = ["Dark Mode", "Bright Mode"];

  return (
    <>
      <Header tabs={tabs} user={user} styleMode={StyleModes[0]} />
      <div className="App"></div>
    </>
  );
}

export default App;
