import React, { useEffect } from 'react';
import './App.css';

import Landing from './Components/Landing';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import ToolBelt from './Components/ToolBelt';
import ContactMe from './Components/ContactMe';
import Resume from './Components/Resume';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Landing />
          <Bio />
          <Projects />
          <ToolBelt />
          <ContactMe />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route>
          <h1>404</h1>
          <p>Not Found. Return to <Link to="/">Home page</Link></p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
