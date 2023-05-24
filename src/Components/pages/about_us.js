import React from "react";
import { Helmet } from 'react-helmet';
import {brandTitle} from '../exports';
import webIcon01 from "../Assets/image/webIcon01.png";
import webIcon02 from "../Assets/image/webIcon02.png";
import webIcon03 from "../Assets/image/webIcon03.png";
import webIcon04 from "../Assets/image/webIcon04.png";
import tear_img from "../Assets/image/tear01.png";


 
 const Home = () => {
    return (
<div>
      <Helmet>
        <title>{brandTitle} | About Us</title>
      </Helmet>
      <section id="paggignation_hdr">
        <h1>About Us</h1>
        <h4><a href="index.html"> <i class="fa fa-home"></i> Home </a>/ <span>About Us</span></h4>
      </section>
      <section id="about_us_sec">
        <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <img src={tear_img} alt="" class="img-responsive"/>
          </div>
          <div class="col-lg-7">
            <div class="about_description">
              <h1>We Can Design Anything You Want</h1>
              <h5>At TechBeez, we believe everyone should have the opportunity to 
                  create progress through technology and develop the skills of tomorrow. 
                  With assessments, learning paths and courses authored by industry experts.</h5>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="services">
           <div class="sectionService">
      <div class="container">
          <div class="row">
        <div class="col-lg-12">
          <div class="service_head" >
            <h1>What We Do for Clients</h1>
            <h4>Most common methods for designing websites that work well on <br/>desktop is responsive and adaptive design</h4>
          </div>
        </div>
      </div>
<div class="servicePannel">
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-6">
          <div class="well">
            <div class="row">
              <div class="col-lg-3">
               <div class="service_img">
                  <img src={webIcon02} alt="" class="img-responsive"/>
               </div>
              </div>
              <div class="col-lg-9">
                <h3>Creative Design</h3>
                <h5>Starts from 7,999.00</h5>
                <h6>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="well">
            <div class="row">
              <div class="col-lg-3">
                <img src={webIcon01} alt="" class="img-responsive"/>
              </div>
              <div class="col-lg-9">
                <h3>Graphic Design</h3>
                <h5>Starts from 6,999.00</h5>
                <h6>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="well">
            <div class="row">
              <div class="col-lg-3">
                <img src={webIcon03} alt="" class="img-responsive"/>
              </div>
              <div class="col-lg-9">
                <h3>UI/UX Design</h3>
                <h5>Starts from 8,999.00</h5>
                <h6>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="well">
            <div class="row">
              <div class="col-lg-3">
                <img src={webIcon04} alt="" class="img-responsive"/>
              </div>
              <div class="col-lg-9">
                <h3>Web Design</h3>
                <h5>Starts from 10,999.00</h5>
                <h6>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>
  </div>
   </div>
      </section>
</div>
)
;
 }

export default Home;