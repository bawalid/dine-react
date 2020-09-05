import React, { useState } from "react";
import { Picture } from "react-responsive-picture";
import Btn from "./Button";
import "./styles/Slide.scss";

import leftBack from "./images/patterns/pattern-curve-top-right.svg";
import lines from "./images/patterns/pattern-lines.svg";

import { gsap } from "gsap";

const slides = [
  {
    title: "Family Gathering",
    text: `We love catering for entire families. So please bring everyone
        along for a special meal with your loved ones. We’ll provide a
        memorable experience for all.`,
    image: {
      desktop1: `${require("./images/homepage/family-gathering-desktop.jpg")}`,
      desktop2: `${require("./images/homepage/family-gathering-desktop@2x.jpg")}`,
      tablet1: `${require("./images/homepage/family-gathering-tablet.jpg")}`,
      tablet2: `${require("./images/homepage/family-gathering-tablet@2x.jpg")}`,
      mobile1: `${require("./images/homepage/family-gathering-mobile.jpg")}`,
      mobile2: `${require("./images/homepage/family-gathering-mobile@2x.jpg")}`,
    },
  },
  {
    title: "Special Events",
    text: `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.`,
    image: {
      desktop1: `${require("./images/homepage/special-events-desktop.jpg")}`,
      desktop2: `${require("./images/homepage/special-events-desktop@2x.jpg")}`,
      tablet1: `${require("./images/homepage/special-events-tablet.jpg")}`,
      tablet2: `${require("./images/homepage/special-events-tablet@2x.jpg")}`,
      mobile1: `${require("./images/homepage/special-events-mobile.jpg")}`,
      mobile2: `${require("./images/homepage/special-events-mobile@2x.jpg")}`,
    },
  },
  {
    title: "Social Events",
    text: `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.`,
    image: {
      desktop1: `${require("./images/homepage/social-events-desktop.jpg")}`,
      desktop2: `${require("./images/homepage/social-events-desktop@2x.jpg")}`,
      tablet1: `${require("./images/homepage/social-events-tablet.jpg")}`,
      tablet2: `${require("./images/homepage/social-events-tablet@2x.jpg")}`,
      mobile1: `${require("./images/homepage/social-events-mobile.jpg")}`,
      mobile2: `${require("./images/homepage/social-events-mobile@2x.jpg")}`,
    },
  },
];

function Slide_Module({ image, text, title }) {
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const animation = (duration, multiplied = 1) => {
    gsap.from(".slide__image", duration, {
      y: -200 * multiplied,
      scale: 1.2,
      ease: "expo.out",
      opacity: 0,
    });

    gsap.from(".slide__text-container", duration, {
      scale: 0.7,
      opacity: 0,
      ease: "elastic.out(0.5, 0.4)",
    });
  };

  const handleSlide1 = (e) => {
    if (!e.target.classList.contains("active")) {
      setState({ isActive1: true, isActive2: false, isActive3: false });

      animation(1.5);
    }
  };

  const handleSlide2 = (e) => {
    if (!e.target.classList.contains("active")) {
      setState({ isActive1: false, isActive2: true, isActive3: false });

      animation(1.5);
    }
  };

  const handleSlide3 = (e) => {
    if (!e.target.classList.contains("active")) {
      setState({ isActive1: false, isActive2: false, isActive3: true });

      animation(1.5);
    }
  };

  return (
    <div className='slide'>
      <img src={leftBack} alt='' className='slide__leftBack' />
      <div className='slide__container'>
        <Picture
          className='slide__image'
          sources={
            state.isActive1
              ? [
                  {
                    srcSet: `${slides[0].image.mobile1} 1x, ${slides[0].image.mobile2} 2x`,
                    media: "(max-width: 489px)",
                  },
                  {
                    srcSet: `${slides[0].image.tablet1} 1x, ${slides[0].image.tablet2} 2x`,
                    media: "(max-width: 768px)",
                  },
                  {
                    srcSet: `${slides[0].image.desktop1} 1x, ${slides[0].image.desktop2} 2x`,
                    media: "(min-width: 769px)",
                  },
                ]
              : state.isActive2
              ? [
                  {
                    srcSet: `${slides[1].image.mobile1} 1x, ${slides[1].image.mobile2} 2x`,
                    media: "(max-width: 489px)",
                  },
                  {
                    srcSet: `${slides[1].image.tablet1} 1x, ${slides[1].image.tablet2} 2x`,
                    media: "(max-width: 768px)",
                  },
                  {
                    srcSet: `${slides[1].image.desktop1} 1x, ${slides[1].image.desktop2} 2x`,
                    media: "(min-width: 769px)",
                  },
                ]
              : [
                  {
                    srcSet: `${slides[2].image.mobile1} 1x, ${slides[2].image.mobile2} 2x`,
                    media: "(max-width: 489px)",
                  },
                  {
                    srcSet: `${slides[2].image.tablet1} 1x, ${slides[2].image.tablet2} 2x`,
                    media: "(max-width: 768px)",
                  },
                  {
                    srcSet: `${slides[2].image.desktop1} 1x, ${slides[2].image.desktop2} 2x`,
                    media: "(min-width: 769px)",
                  },
                ]
          }
        />
        <div className='slide__content'>
          <div className='navigation-links'>
            <p
              className={`slide-nav-item ${state.isActive1 ? "active" : ""}`}
              onClick={handleSlide1}>
              Family Gathering
            </p>
            <p
              className={`slide-nav-item ${state.isActive2 ? "active" : ""}`}
              onClick={handleSlide2}>
              Special Events
            </p>
            <p
              className={`slide-nav-item ${state.isActive3 ? "active" : ""}`}
              onClick={handleSlide3}>
              Social Events
            </p>
          </div>
          <div className='slide__text-container'>
            <h2>
              {state.isActive1
                ? slides[0].title
                : state.isActive2
                ? slides[1].title
                : slides[2].title}
            </h2>
            <p className='slide__text'>
              {state.isActive1
                ? slides[0].text
                : state.isActive2
                ? slides[1].text
                : slides[2].text}
            </p>
          </div>
          <Btn type='dark' name='book a table' />
        </div>
      </div>
      <img src={lines} alt='' className='slide__lines' />
    </div>
  );
}

export default Slide_Module;
