import React from "react";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = props => (

     
         
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Saga Clicky</a>
            <ul className="text-white nav-fills nav">
              <li className="nav-item">
                <span className="nav-link">Score: {props.score} | Top Score: {props.topScore}</span>
                </li>
            </ul>
                <span>{props.message}</span>
          </nav>
        
    

)

export default NavBar