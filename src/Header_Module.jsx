import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./styles/Header.scss";
import logo from "./images/logo.svg";

function Header_Module({ home, title, text }) {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='header__content'>
        <div className='header__text'>
          <h1>{title}</h1>
          <p className='normal'>{text}</p>
        </div>
        {home && <Button type='light' name='book a table' />}
      </div>
    </header>
  );
}

export default Header_Module;
