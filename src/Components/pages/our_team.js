import React from "react";
import { Helmet } from 'react-helmet';
import {brandTitle} from '../exports';
 
 const OurTeam = () => {
    return (
<div>
      <Helmet>
        <title>{brandTitle} | Our Team</title>
      </Helmet>
 
      <section id="paggignation_hdr">
<h1>Our Team</h1>
<h4><a href="index.html"> <i class="fa fa-home"></i> Home </a>/ <span>Our Team</span></h4>
</section>
<section id="top_heading">
  <h3>Meet Our Team</h3>
  <h5>We’re always looking for talented workers, creative directorsand <br/>anyone 
has a passion for the logistic service join our team.</h5>
</section>
<section id="our_team_sec">
    <div class="sect sectOne">
      <div class="container-fluid">
        <div class="row">  
          <div class="col-lg-12">
            <div class="subSection1"> 
              <div class="row">
                <div class="col-lg-3">
                  <div class="profileCard">
                    <div class="well">
                        <div class="profileHead">
                          <img src="Assets/image/codeBack.jpg" alt="" width="100%"/>
                        </div>
                        <div class="row">
                          <div class="col-lg-3"></div>
                          <div class="col-lg-6">
                            <div class="profileImage">
                           <img src="Assets/image/profile_avi.png" alt="" width="100%"/>
                        </div>
                          </div>
                          <div class="col-lg-3"></div>
                        </div>
                        <div class="profileDetails">
                          <h2>Avinash Singh</h2>
                          <h4>Web Developer</h4>
                          <h5><i class="fa fa-envelope"></i> avinashsingh4494@gmail.com</h5>
                          <h6>Actually, i just woke up one day and decided
 I didn't want to feel like that <br/>anymore, 
or ever again. So I changed....</h6>
                        </div>
                        <div class="profileSocial">
                          <ul>
            <li><a href=""><i class="fa fa-facebook-square"></i><span>Facebook</span></a></li>
            <li><a href=""><i class="fa fa-twitter-square"></i><span>Twitter</span></a></li>
            <li><a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i><span>Linkdein</span></a></li>
            <li><a href="https://github.com/singhavi94" target="blank"><i class="fa fa-github-square"></i><span>Git</span></a></li>                      
          </ul>
                        </div>
                        <div class="profileDownload">
                          <button class="buttonProfileDownload" type="submit"></button>
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

export default OurTeam;