import React from 'react';
import Card from './components/Card'
import './App.css';
import { Toaster } from './components/ui/toaster';
import { ToastDemo } from './components/ToastDemo';

function App() {
  return (
    <div className="App">
      <Card src="/images/person.jpg" alt="Person" textarea={"About"} />
      <Card src="/images/projects.jpg" alt="QuestionMark" textarea={"Projects"} />
      <ToastDemo />
      <Toaster />
    </div>
  );
}

export default App;
