"use strict";
/* IMPORT COMPONENTS */
import header from "./components/header";
import textParallax from "./components/textParallax";
import countUp from "./components/countUp";

/* ELEMENTS */

// FIXED HEADER ELEMENT
const headerElement = document.querySelector(".header");

// PARALAX ELEMENTS
const parallaxScene = document.querySelector("#js-parallax-scene");
const parallaxLayer = document.querySelector("#js-parallax-layer");

// COUNT US ELEMENTS
const countupElements = document.querySelectorAll(".countup");
const inViewportElement = document.querySelector(".achives");

/* INIT COMPONENTS */
header.init(headerElement);
textParallax.init(parallaxScene, parallaxLayer);
countUp.init(countupElements, inViewportElement);
