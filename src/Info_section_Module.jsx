import React from "react";
import "./styles/Info-section.scss";
import { Picture } from "react-responsive-picture";
import divide from "./images/patterns/pattern-divide.svg";
import leftImg2 from "./images/homepage/enjoyable-place-desktop@2x.jpg";
import leftImg from "./images/homepage/enjoyable-place-desktop.jpg";
import leftImgTablet2 from "./images/homepage/enjoyable-place-tablet@2x.jpg";
import leftImgTablet from "./images/homepage/enjoyable-place-tablet.jpg";
import leftImgMobile2 from "./images/homepage/enjoyable-place-mobile@2x.jpg";
import leftImgMobile from "./images/homepage/enjoyable-place-mobile.jpg";
import rightImg2 from "./images/homepage/locally-sourced-desktop@2x.jpg";
import rightImg from "./images/homepage/locally-sourced-desktop.jpg";
import rightImgTablet2 from "./images/homepage/locally-sourced-tablet@2x.jpg";
import rightImgTablet from "./images/homepage/locally-sourced-tablet.jpg";
import rightImgMobile2 from "./images/homepage/locally-sourced-mobile@2x.jpg";
import rightImgMobile from "./images/homepage/locally-sourced-mobile.jpg";
import lines from "./images/patterns/pattern-lines.svg";
import leftBack from "./images/patterns/pattern-curve-top-right.svg";
import rightBack from "./images/patterns/pattern-curve-top-left.svg";

function Info_section_Module() {
  return (
    <section className='info-section'>
      <div className='info__section left'>
        <img src={leftBack} alt='' className='leftBack' />
        <div className='picture-container'>
          <Picture
            className='section-left'
            sources={[
              {
                srcSet: `${leftImgMobile} 1x, ${leftImgMobile2} 2x`,
                media: "(max-width: 489px)",
              },
              {
                srcSet: `${leftImgTablet} 1x, ${leftImgTablet2} 2x`,
                media: "(max-width: 768px)",
              },
              {
                srcSet: `${leftImg} 1x, ${leftImg2} 2x`,
                media: "(min-width: 769px)",
              },
            ]}
          />
        </div>
        <div className='info-section__content'>
          <img src={divide} alt='' />
          <h2>Enjoyable place for all the family</h2>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>

      <div className='info__section right'>
        <img src={rightBack} alt='' className='rightBack' />
        <div className='picture-container'>
          <Picture
            className='section-right'
            sources={[
              {
                srcSet: `${rightImgMobile} 1x, ${rightImgMobile2} 2x`,
                media: "(max-width: 489px)",
              },
              {
                srcSet: `${rightImgTablet} 1x, ${rightImgTablet2} 2x`,
                media: "(max-width: 768px)",
              },
              {
                srcSet: `${rightImg} 1x, ${rightImg2} 2x`,
                media: "(min-width: 769px)",
              },
            ]}
          />
        </div>
        <div className='info-section__content'>
          <img src={divide} alt='' />
          <h2>Enjoyable place for all the family</h2>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>

        <img src={lines} alt='' className='info-section__lines' />
      </div>
    </section>
  );
}

export default Info_section_Module;
