import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import { Home, Week5, Contact, Users, UserProfile } from './components/Pages';
import { LeftSideBar, Content, ToogleBar } from './components/Container'

function App() {

  return (
    <Router>
      <div className="main-container">
        <LeftSideBar />
        <Content>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/week5' component={Week5} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/users' component={Users} />
            <Route path='/users/:id' component={UserProfile} />
          </Switch>
        </Content>
        <ToogleBar />
      </div>
    </Router>
  );
}

export default App;