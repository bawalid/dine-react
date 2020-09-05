import React from "react";
import "./styles/Highlight.scss";
import divide from "./images/patterns/pattern-divide.svg";
import MenuHighlight from "./MenuHighlight_Module";

import Salamon from "./images/homepage/salmon-desktop-tablet@2x.jpg";
import Rosemary from "./images/homepage/beef-desktop-tablet@2x.jpg";
import Fruit from "./images/homepage/chocolate-desktop-tablet@2x.jpg";

function Highlight_Module() {
  return (
    <section className='highlight-section'>
      <div className='highlight-section__content'>
        <img src={divide} alt='' />
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className='highligh-section__menu'>
        <MenuHighlight
          title='Seared Salmon Fillet'
          text='Our locally sourced salmon served with a refreshing buckwheat summer salad.'
          image={Salamon}
        />
        <hr />
        <MenuHighlight
          title='Rosemary Filet Mignon'
          text='Our prime beef served to your taste with a delicious choice of seasonal sides.'
          image={Rosemary}
        />
        <hr />
        <MenuHighlight
          title='Summer Fruit Chocolate Mousse'
          text='Creamy mousse combined with summer fruits and dark chocolate shavings.'
          image={Fruit}
        />
      </div>
    </section>
  );
}

export default Highlight_Module;
