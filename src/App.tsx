import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navigation from './components/navigation';
import Login from './components/login';
import Sign from './components/sign';
import Messenger from './components/messenger';
import Homes from './components/Home';

  function App() {
    return (
      <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/home" exact component={Homes} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign" exact component={Sign} />
          <Route path="/messenger" exact component={Messenger} />
        </Switch>
      </Router>
    </div>
      );
  }
  

export default App ;
