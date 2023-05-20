import React from 'react';
import {brandTitle} from '../exports';
import {Link } from "react-router-dom";
import brandLogo from "../Assets/image/brandLogo.png";
import waveCurve from "../Assets/image/waveCurve.png";
const Footer = () =>
{
return (
    
<footer>
<div class="wave">
  <img src={waveCurve} alt="" width="100%;"/>
</div>
<section id="sectionFooter">
<div className="container">
    <div className="row">
    <div className="col-lg-5 col-xs-12">
        <div className="footerContent">
       <h4>{brandTitle}</h4>
        <h5>We believe everyone has the capacity to be creative. <br />Techbees is a place where people develop their own potential.</h5>
        </div>
    </div>
    <div className="col-lg-4 col-xs-6">
        <div className="footerContent">
        <h4>Useful Links</h4>
        <div className="row">
            <div className="col-lg-6">
            <Link to="/AboutUs">
                <p className='footerNav'><i className="fa fa-minus" /> About Us</p>
            </Link>
            <Link to="/OurTeam">
                <p className='footerNav'><i className="fa fa-minus" /> Our Team</p>
            </Link>
            <Link to="/ourteam">
                <p className='footerNav'><i className="fa fa-minus" /> Our Team</p>
            </Link>
            </div>
            <div className="col-lg-6">
            <Link to="/ourteam">
                <p className='footerNav'><i className="fa fa-minus" /> Our Team</p>
            </Link>
            <Link to="/ourteam">
                <p className='footerNav'><i className="fa fa-minus" /> Our Team</p>
            </Link>
            </div>
        </div>
        </div>
    </div>
    <div className="col-lg-3 col-xs-12">
        <div className="icons">
        <ul>
            <li><a href><i className="fa fa-facebook-square" /><span>Facebook</span></a></li>
            <li><a href><i className="fa fa-twitter-square" /><span>Twitter</span></a></li>
            <li><a href><i className="fa fa-linkedin-square" aria-hidden="true" /><span>Linkdein</span></a></li>
            <li><a href="https://github.com/singhavi94" target="blank"><i className="fa fa-github-square" /><span>Git</span></a></li>                      
        </ul>
        </div>
    </div>   
    </div>
    <div className="copyright">
    <div className="row">
        <div className="col-lg-6 col-xs-9">
            <Link to="/">
                <div className="row">
                    <div className="col-lg-1 col-xs-2">
                    <img className="footerImage" src={brandLogo} alt="{logo04.jpg}"/>
                    </div>
                    <div className="col-lg-11 col-xs-10">
                    <h2>{brandTitle}</h2>
                    </div>
                </div>
            </Link>
        </div>
        <div className="col-lg-6 col-xs-3">
        <div className="move_up">
            <div className="icons" style={{float: 'right'}}>
            <ul>
                <a href="#tothetop"> 
                <li><i style={{color: '#5F0A82', padding: '0px', paddingTop: '10px'}} className="fa fa-chevron-up" /><span>To the Top</span> </li>
                </a>                        
            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>
</div> 
</section>
</footer>
)
;
} 
export default Footer;