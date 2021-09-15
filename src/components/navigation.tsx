import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand ">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ color:'grey' }} >
            E-mifandray RABETSIMAMANGA Harena IGGLIA3 n66
          </Link>

          <div className="justify-content-center" >
            <ul className="navbar-nav ml-auto">
              <li
                className='nav-item'
                >
                  <Link className="nav-link" to="/home" style={{ color:'grey' }}>
                    Home
                  </Link>
              </li>
              <li
                className='nav-item'
              >
                <Link className="nav-link" to="/messenger" style={{ color:'grey' }}>
                  Messages
                </Link>
              </li>
              <li
               className='nav-item'
              >
                <Link className="nav-link" to="/login" style={{ color:'grey' }}>
                  Login
                </Link>
              </li>
              
              <li
                className='nav-item'
              >
                <Link className="nav-link" to="/sign" style={{ color:'grey' }}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
}

export default withRouter(Navigation);