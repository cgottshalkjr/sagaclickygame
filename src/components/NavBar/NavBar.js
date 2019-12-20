import React from "react";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = props => (

  <nav className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" id="navLogo" href="/">Saga Clicky</a>
    <ul className="text-white nav-fills nav">
      <li className="nav-item">
        <span className="nav-link float-left">Score: {props.score} | Top Score: {props.topScore}</span>
      </li>
    </ul>
    <span className="text-warning nav-message"><h5>{props.message}</h5></span>
  </nav>
)

export default NavBar;