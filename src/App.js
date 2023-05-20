import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {brandTitle} from './Components/exports';

import Header from './Components/Navigation/header';
import Home from "./Components/pages/Home";
import OurTeam from "./Components/pages/our_team";
import AboutUs from "./Components/pages/about_us";
import NoPage from "./Components/pages/404_Error";
import Footer from "./Components/Navigation/footer";



function App ()
{
return (
    <div className="App">
      <Helmet>
        <title>{brandTitle}</title>
      </Helmet> 
<>
         <Routes>
            <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes> 
</>
<Footer />
</div>
);
}
export default App;