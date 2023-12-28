import React from 'react';
import Card from './component/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <Card src="/images/person.jpg" alt="Person" textarea={"About"} />
      <Card src="/images/projects.jpg" alt="QuestionMark" textarea={"Projects"} />
    </div>
  );
}

export default App;
