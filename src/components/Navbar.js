import React from "react";

import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
            </li>
            
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" >portfolio</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" >contacts</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
