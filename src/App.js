import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import MaterialUI from './components/Week5/Zadanie1/MaterialUI';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MaterialUI} />
      </Switch>
    </Router>
}

export default App;


// <Router>
// <div>
//   <nav>
//     <li>
//       <Link to="/">Zadanie 3</Link>
//     </li>
//     <li>
//       <Link to="/Zadanie1">Zadanie 1-2</Link>
//     </li>
//   </nav>
// </div>
// </Router>