import React from "react";
import "./styles/MenuHighlight.scss";

function MenuHighlight_Module({ image, title, text }) {
  return (
    <div className='menu-highlight'>
      <div className='menu-highlight__img'>
        <img src={image} alt='' />
        <div className='menu-highlight__line'></div>
      </div>
      <div className='menu-highlight__content'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default MenuHighlight_Module;
