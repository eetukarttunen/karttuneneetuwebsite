import React from 'react';
import NaviBar from './komponentit/NaviBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './komponentit/pages/Home';
import Osaaminen from './komponentit/pages/Osaaminen';
import Kuka from './komponentit/pages/Kuka';
import CV from './komponentit/pages/CV';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NaviBar />
      <Switch>
        <Route path='/' exact component=
        {Home}/>
        <Route path='/osaaminen' component=
        {Osaaminen} />
        <Route path='/kuka' component=
        {Kuka} />
        <Route path='/cv' component=
        {CV} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
