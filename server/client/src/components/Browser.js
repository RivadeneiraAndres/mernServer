import React from 'react';
import circled from '../images/circled-right-2.png'

import '../css/Browser.css'

function Browser( props) {
  return (
    <div>
      <center>
        <h2>Start browsing</h2>
        <button><img src={circled} alt="house" id="browser-img"/></button>
      </center> 
    </div>
  );
}

export default Browser;
