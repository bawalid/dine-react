import React from "react";
import "./styles/Footer.scss";
import logo from "./images/logo.svg";

function Footer_Module() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='footer__content'>
        <div className='footer__address'>
          <p>Marthwaite, Sedbergh</p>
          <p>Cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className='footer__timing'>
          <p>OPEN TIMES</p>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Footer_Module;
