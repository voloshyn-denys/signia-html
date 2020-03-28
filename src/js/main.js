"use strict";
/* IMPORT COMPONENTS */
import header from "./components/header";
import textParallax from "./components/textParallax";
import countUp from "./components/countUp";
import animateSection from "./components/animateSection";
import highlightNavigation from "./components/highlightNavigation";
import heroSlider from "./components/heroSlider";

/* ELEMENTS */

// FIXED HEADER ELEMENT
const headerElement = document.querySelector(".header");

// PARALAX ELEMENTS
const parallaxScene = document.querySelector("#js-parallax-scene");
const parallaxLayer = document.querySelector("#js-parallax-layer");

// COUNT US ELEMENTS
const countupElements = document.querySelectorAll(".countup");
const inViewportElement = document.querySelector(".achives");

// ANIMATE SECTION
const sectionsElements = document.querySelectorAll(".js-animate");

// HIGHLIGHT NAVIGATION
const links = document.querySelectorAll('.portfolio__navigation__item');
const sections = document.querySelectorAll(".portfolio__area .portfolio__box");

/* INIT COMPONENTS */
header.init(headerElement);
textParallax.init(parallaxScene, parallaxLayer);
countUp.init(countupElements, inViewportElement);
animateSection.init(sectionsElements);
highlightNavigation.init(links, sections);
heroSlider.init('.glide');