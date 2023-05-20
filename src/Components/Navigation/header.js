import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {brandTitle} from "../exports"
import brandLogo from "../Assets/image/brandLogo.png";
const Header = () => {
  return (
<div>

<section id="navbar_hdr">
        <nav className="navbar navbar-default navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" style={{borderRadius: '0px', backgroundColor: 'white'}} />
                <span className="icon-bar" style={{borderRadius: '0px', backgroundColor: 'white'}} />
                <span className="icon-bar" style={{borderRadius: '0px', backgroundColor: 'white'}} />                        
              </button>
                <Link to="/">
                <div className="navbar_brand">
                    <img src={brandLogo} alt="" width="45px" height="45px" />  
                      <span>{brandTitle}</span>
                      </div>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/OurTeam">Our Team</Link></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact_us.html">Contact Us</a></li>  
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section id="hidden_sec" />
      <Outlet />
    </div>
  )
};

export default Header;