import React from 'react';

import Login from './Login'
import Footer from './Footer'
import Browser from './Browser'
import Carrusel  from './Carrusel'

import '../css/Home.css';

import logo from '../images/MYtineraryLogo.png'
//import { homedir } from 'os';


function Home() {
  return (
    <div id="contenedor">
      <img src={logo} alt="logo" id="logo-header"/>
      <center>
        <p>Find your perfect trip,designed by insiders who know and love their cities.</p><br/>
      </center>
      <Browser/>
      <center>
          <p>Want to build your own MYtinerary</p>
      </center>
      <Carrusel/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default Home;
