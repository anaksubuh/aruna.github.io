const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* NAVBAR SCROLL */

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});

/* MOBILE MENU */

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* CLOSE MENU WHEN CLICK */

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

});