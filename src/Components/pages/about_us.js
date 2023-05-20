import React from "react";
import { Helmet } from 'react-helmet';
import {brandTitle} from '../exports';
 
 const Home = () => {
    return (
<div>
      <Helmet>
        <title>{brandTitle} | About Us</title>
      </Helmet>
      <section id="paggignation_hdr">
    <h1>About Us</h1>

  </section>
  <section id="our_team_sec">
    <div className="container-fluid" />
    <div className="container">
      <div className="row">
        <div className="col-lg-12"></div>
      </div>
    </div>
  </section>
</div>
)
;
 }

export default Home;