import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../images/logo.png";
import { Link } from "react-scroll";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
  

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
                <img src={logo} alt="" />
          </div>
  
          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/service">services</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
  
          {/* 3rd social media links */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_thapa">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thapatechnical/"
                  target="_thapa">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_thapa">
                  <FaYoutubeSquare className="youtube" />
                </a>
              </li>
            </ul>
  
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  };
  


export default Navbar;
