import React from "react";
import JuanLogo from "../Image/jg-logo.jpg";
// REACT-SCROLL //
import {Link} from "react-scroll";
// REACT FONTAWESOME IMPORTS NPM
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={JuanLogo} className="jg-logo" alt="logo"></img>
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {/* <span className="navbar-toggler-icon"></span> */}
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link smooth={true} to="home" className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="about" offset={-80} className="nav-link" href="#">
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="services" offset={-80} className="nav-link" href="#">
                    Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="experience" offset={-80} className="nav-link" href="#">
                    Experience
                    </Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="portfolio" offset={-80} className="nav-link" href="#">
                    Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link smooth={true} to="contact" offset={-80} className="nav-link" href="#">
                    Contact
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
