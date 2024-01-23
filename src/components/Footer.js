import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Footer() {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
return (
  <>
    <nav className="navbar navbar-expand-sm sticky-bottom">
      <div className="container-fluid">
        <NavLink exact to="/" className="nav-logo ">
          <span>QA Properties</span>
          {/* <i className="fas fa-code"></i> */}
          
        </NavLink>

        <ul className={click ? "nav-menu " : "nav-menu"}>
        <li >
            <NavLink
              exact
              to="/Home"
              
              className="nav-links"
              onClick={handleClick}
            >
               <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </li>

          <li>
            About Us
           &nbsp;
          </li>
          <li>
            Contact
            &nbsp;
          </li>

          <li>
            T&C
            &nbsp;
          </li>
        
        
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

          {click ? (
            <span className="icon">
              <HamburgetMenuOpen />{" "}
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          )}
        </div>
      </div>
    </nav>
  </>
);
}

export default Footer;