import React from 'react';
import './App.css';

import Landing from './Components/Landing';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App">
      <Landing />
      <Bio />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
