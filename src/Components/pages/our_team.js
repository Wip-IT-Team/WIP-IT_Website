import React from "react";
import { Helmet } from 'react-helmet';
import {brandTitle} from '../exports';
import codeBack from "../Assets/image/codeBack.jpg";
import teamMembers from "../Assets/teamMembers.json"

/*commenting imports for time being as we switched to use json file*/
/*import profile_as from "../Assets/image/profile_as.png";
import profile_kk from "../Assets/image/profile_kk.png";
import profile_sc from "../Assets/image/profile_sc.png";
import profile_sd from "../Assets/image/profile_sd.png";
import profile_sh from "../Assets/image/profile_sh.png";
import profile_rj from "../Assets/image/profile_as.png";*/
 
 const OurTeam = () => {
    return (
<div>
      <Helmet>
        <title>{brandTitle} | Our Team</title>
      </Helmet>
      <section id="paggignation_hdr">
        <h1>Our Team</h1>
        <h4><a href="index.html"> <i className="fa fa-home"></i> Home </a>/ <span>Our Team</span></h4>
      </section>
      <section id="top_heading">
        <h3>Meet Our Team</h3>
        <h5>We’re always looking for talented workers, creative directors and <br/>anyone
        has a passion for the logistic service join our team.</h5>
      </section>
      <section id="our_team_sec">
        <div className="sect sectOne">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="subSection1">
                  <div className="row">
                    {/* Iterate over team members */}
                    {teamMembers.map((member, index) => (
                      <div className="col-lg-3" key={index}>
                        <div className="profileCard">
                          <div className="well">
                            <div className="profileHead">
                              <img src={codeBack} alt="" width="100%" />
                            </div>
                            <div className="row">
                              <div className="col-lg-3"></div>
                              <div className="col-lg-6">
                                <div className="profileImage">
                                  <img src={member.image} alt="" width="100%" />
                                </div>
                              </div>
                              <div className="col-lg-3"></div>
                            </div>
                            <div className="profileDetails">
                              <h2>{member.name}</h2>
                              <h4>{member.role}</h4>
                              <h5><i className="fa fa-envelope"></i> {member.email}</h5>
                              <h6>{member.description}</h6>
                            </div>
                            <div class="col-lg-3"></div>
                          </div>
                          <div class="profileDetails">
                            <h2>Kalyan Kanuri</h2>
                            <h4>Web Developer</h4>
                            <h5><i class="fa fa-envelope"></i> avinashsingh4494@gmail.com</h5>
                            <h6>Actually, i just woke up one day and decided
                            I didn't want to feel like that <br/>anymore,
                            or ever again. So I changed....</h6>
                          </div>
                          <div class="profileSocial">
                            <ul>
                              <li><a href=""><i class="fa fa-facebook-square"></i></a></li>
                              <li><a href=""><i class="fa fa-twitter-square"></i></a></li>
                              <li><a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                              <li><a href="https://github.com/singhavi94" target="blank"><i class="fa fa-github-square"></i></a></li>
                            </ul>
                          </div>
                          <div class="profileDownload">
                            <div class="row">
                              <div class="col-lg-3"></div>
                              <div class="col-lg-6">
                                <button class="buttonProfileDownload" type="submit">View Profile</button>
                              </div>
                              <div class="col-lg-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="col-lg-3">
                      <div class="profileCard">
                        <div class="well">
                          <div class="profileHead">
                            <img src={codeBack} alt="" width="100%"/>
                          </div>
                          <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-6">
                              <div class="profileImage">
                                <img src={profile_sc} alt="" width="100%"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );)}
                    {/* End of team member iteration */}
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