import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import './Components/Assets/css/web_style.css';
import './Components/Assets/css/nav_style.css';
import './Components/Assets/css/footer_style.css';
import Team from './Components/our_team';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About'; 

function App ()
{
return (
    <div>
        <div>
        <Router>
        <section id="Navigation_Links">
             {/* Meta */}
            <link rel="icon" href="Assets/image/logo04.png" height="10px" />
            {/* Meta */}
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, user-scalable=no"
            />
            {/* Meta */}
            <meta
                name="keywords"
                content="Cargo, Aaradhya Cargo Movers, Railways Service, Airways Service, Roadways Service, packets, Docket, Boxes"
            />
            <meta
                name="description"
                content="Aaradhya Cargo and Movers Bangalore is one of the most reputed logistics companies in India with several branches all over India. We have been offering the most updated and innovative solutions as per the needs and demands of the Indian and international moving industry.Our extensive network helps us to coordinate all activities throughout India effortlessly and we have a strong fleet of vehicles and a disciplined and committed team of people to meet any rigorous and complex demands of the customers."
            />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            {/* Bootstrap Core CSS */}
            {/* <link rel="stylesheet" href="assets/css/bootstrap.min.css"> */}
            {/* fonts */}
            <link
                href="https://fonts.googleapis.com/css?family=Carter One"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Athiti"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Ubuntu"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Brush Script MT"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple"
            />
        </section>
       
        <header>
            <section id="navbar_hdr">
                <nav className="navbar navbar-default navbar-fixed">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar" style={{borderRadius: '0px', backgroundColor: 'white'}} />
                        <span className="icon-bar" style={{borderRadius: '0px', backgroundColor: 'white'}} />
                        <span className="icon-bar" style={{borderRadius: '0px', backgroundColor: 'white'}} />                        
                        </button>
                        <a className="navbar_brand" href="index.html">
                        <span> 
                            <img src="Assets/image/logo04.png" alt="" width="45px" height="45px" />  <span>Techbees</span>
                        </span></a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/team">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li> 
                        </ul>
                    </div>
                    </div>
                </nav>
        </section>
            
        </header>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Team} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} /> 
        </Routes>
       </Router>
       </div>
       <div>            
        <footer>
            <section id="sectionFooter">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-xs-12">
                    <div className="footerContent">
                    <h4>Techbees</h4>
                    <h5>We believe everyone has the capacity to be creative. <br />Techbees is a place where people develop their own potential.</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-xs-6">
                    <div className="footerContent">
                    <h4>Useful Links</h4>
                    <div className="row">
                        <div className="col-lg-6">
                        <a href="about_us.html"><p><i className="fa fa-minus" /> About Us</p></a>
                        <a href="our_team.html"><p><i className="fa fa-minus" /> Our Team</p></a>
                        <a href="resource.html"><p><i className="fa fa-minus" /> Resource Center</p></a>
                        </div>
                        <div className="col-lg-6">
                        <a href="projects.html"><p><i className="fa fa-minus" /> Projects</p></a>
                        <a href="contact_us.html"><p><i className="fa fa-minus" /> Contact Us </p></a>
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
                    <div className="row">
                        <div className="col-lg-1 col-xs-2">
                        <img alt='footer' className="footerImage" src="Assets/image/logo04.png" />
                        </div>
                        <div className="col-lg-11 col-xs-10">
                        <h2>Techbees</h2>
                        </div>
                    </div>
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
     </div>
    </div>
);
}
export default App;