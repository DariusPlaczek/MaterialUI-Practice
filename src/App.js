import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './components/Pages/Home';
import Week5 from './components/Pages/Week5'
import Contact from './components/Pages/Contact'
import { LeftSideBar, Content, ToogleBar } from './components/Container'

function App() {

  return (
    <Router>
      <div className="main-container">
        <LeftSideBar />
        <ToogleBar />
        <Content>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/week5' component={Week5} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;