import React from 'react';
import house from '../images/homeIcon.png'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import '../css/Footer.css'

function Footer( props) {
  return (
    <div className="Footer">
      <center>
        <Router>
          <a href="/"><img src={house} alt="house" id="home-logo"/></a>
        </Router>
      </center> 
    </div>
  );
}

export default Footer;
