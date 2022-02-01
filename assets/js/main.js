"use strict";
// MENU

const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const mobileNav = document.querySelector("nav.mobile");

menu.addEventListener("click", function (e) {
  // For Menu Animation
  this.classList.toggle("active");
  // To make header active
  header.classList.toggle("active");
  // To hide mobile navigation
  mobileNav.classList.toggle("hidden");
});

// SLIDER

const slider = document.querySelector(".slider");
// console.log(Array.from(slider.children)[0].dataset.test);

const slides = slider.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  // console.log(slide, index);
  slide.style.transform = `translateX(${index * 100}%)`;
  // console.log(slide);
});

let currSlide = 0;
const maxSlide = slides.length - 1;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const moveToNext = function (e) {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translatex(${(index - currSlide) * 100}%)`;
  });
};

const moveToPrev = function (e) {
  if (currSlide === 0) {
    currSlide = maxSlide;
  } else {
    currSlide--;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translatex(${(index - currSlide) * 100}%)`;
  });
};

next.addEventListener("click", moveToNext);

prev.addEventListener("click", moveToPrev);
