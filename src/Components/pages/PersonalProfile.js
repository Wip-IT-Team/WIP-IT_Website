import React from "react";
import { Helmet } from 'react-helmet';
import {brandTitle} from '../exports';

const OurTeam = () => {
    return (
        <div>
            <Helmet>
                <title>{brandTitle} | My Profile</title>
            </Helmet>
 
            <section id="profile_sec">
        <div className="profile_description">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h4>Hello, I'm</h4>
                <h1>Avinash Singh</h1>
                <h5>Hi! I am his web designer, very passionate and dedicated to his work. With his 2 years of experience as a professional web developer he has accquired the necessary skills and knowledge to successfully complete a project. I enjoy every step of the design process, from discussion to collaboration..Check out my online resume and project portfolio.</h5>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-4">
                <img src="Assets/image/profile_asd.png" alt="" className="img-responsive" />
                <div className="social_icons">
                  <ul>
                    <li><a href><i className="fa fa-linkedin-square" aria-hidden="true" /><span>Linkdein</span></a></li>
                    <li><a href="https://github.com/singhavi94" target="blank"><i className="fa fa-github-square" /><span>Git</span></a></li>
                    <li><a href><i className="fa fa-twitter-square" /><span>Twitter</span></a></li>
                    <li><a href target="blank"><i className="fa fa-instagram" /><span>Instagram</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="portfolio" className="tab-pane fade in active">
          <div className="sectionPort">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div>
                    <h1>My Amazing Works</h1>
                    <div>
                      <h4>Most common methods for designing websites that work well <br /> on desktop is responsive and adaptive design</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="sub_list">
                    <ul className="nav navbar-nav" style={{paddingBottom: '7px'}}>
                      <li className="active"><a data-toggle="tab" href="#websites" style={{backgroundColor: 'transparent'}}>Website's</a></li>
                      <li><a data-toggle="tab" href="#dashboards" style={{backgroundColor: 'transparent'}}>Dashboards</a></li>
                      <li><a data-toggle="tab" href="#loginForms" style={{backgroundColor: 'transparent'}}>Login Forms</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div id="websites" className="tab-pane fade in active" style={{paddingBottom: '0px'}}>
                  {/* Website Row 1 */} 
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web01.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="https://utpannseeds.com/" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web02.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web03.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web04.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Website Row 1 */} 
                  {/* Website Row 2 */}
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web05.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="https://utpannseeds.com/" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web06.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web07.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web08.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Website Row 2 */}
                  {/* Website Row 3 */}
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web09.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="https://utpannseeds.com/" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web10.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web11.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web12.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                  </div>
                  {/* Website Row 3 */}
                  {/* Website Row 4 */}
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web13.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="https://utpannseeds.com/" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web14.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web15.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <a href="about.php" target="blank"><button className="viewButton" style={{marginBottom: '8px'}}>Visit Now</button></a>
                        <div className="well">
                          <img src="assets/image/web16.png" className="img-responsive" alt="" />
                        </div> 
                      </div>
                    </div>
                  </div>
                  {/* Website Row 4 */}
                </div>
                <div id="dashboards" className="tab-pane fade">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash01.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash02.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash03.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash04.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash01.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash06.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/dash07.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="loginForms" className="tab-pane fade" style={{paddingBottom: '18px'}}>
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log01.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log02.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log03.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log04.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                  </div><br />
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log05.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log06.png" className="img-responsive" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="website">
                        <div className="well">
                          <img src="assets/image/log07.png" className="img-responsive" alt="" />
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
    );
}