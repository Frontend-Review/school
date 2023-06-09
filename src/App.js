



import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AboutSchool from './AboutSchool';
import Home from './Home';
//import Login from './Login';
import RegistrationForm from './RegistationForm';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutSchool />
          </Route>
         
          <Route path="/registration">
            <RegistrationForm />
          </Route>
          
          <Route path="/">
            
        <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
