// Menu Animation

const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const mobileNav = document.querySelector("nav.mobile");
console.log(mobileNav);

menu.addEventListener("click", function (e) {
  this.classList.toggle("active");
  header.classList.toggle("active");
  mobileNav.classList.toggle("hidden");
});
