import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { sign } from 'crypto';
import Sign from './components/sign';

function Index(){
     return <h2>Home</h2>;
  }

  function AppRouter() {
      return (
       <Router>
         <header style={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
                <ul className="nav justify-content-center">
                  <li className="nav-item active">
                    <Link to="/components/sign" className="nav-link" style={{ color: '#FFF' }}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/App" className="nav-link" style={{ color: '#FFF' }}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/components/Login" className="nav-link" style={{ color: '#FFF' }}>Login</Link>
                  </li>
                </ul>
           <Route path="/App" exact component={App} />
           <Route path="/components/Sign" exact component={Sign} />
           <Route path="/components/login" component={Login} />
         </header>
         </Router>
      );
     }
  
  function App() {
    return (
      <div>
        
      </div>
    );
  }
  

export default AppRouter ;
