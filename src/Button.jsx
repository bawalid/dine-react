import React from "react";
import { Link } from "react-router-dom";
import "./styles/Button.scss";

function Button({ type, name }) {
  return (
    <Link className={`button ${type}`} href='' to='/booking'>
      {name}
    </Link>
  );
}

export default Button;
