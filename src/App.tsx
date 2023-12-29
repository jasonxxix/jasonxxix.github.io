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
  

  return (
    <>
      <Header tabs={tabs} user={user} />
      <div className="App bg-amber-50 dark:bg-cyan-900"></div>
    </>
  );
}

export default App;
