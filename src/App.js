import React from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import {Navigation,Footer,Home, About, Contact} from './components';
import './style.css';


function App() {
  return (
      <Router>
      < Navigation/>
      <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
      </Switch>
      <Footer/>
  
      </Router>
  );
}

export default App;
