// Variable declarations
const openMenuIcon = document.getElementById("menu-toggle-open");
const closeMenuIcon = document.getElementById("menu-toggle-close");
const mobileMenu = document.getElementById("mobile-menu");
const headerOverlay = document.getElementById("header");
const grassImage = document.getElementById("grassland");
const skyImage = document.getElementById("sky");
const mountainsImage = document.getElementById("mountains");
const heroData = document.getElementById("hero-data");

// Open menu & add overlay
openMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("menu-opened");
  headerOverlay.classList.add("menu-opened");
});
closeMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("menu-opened");
  headerOverlay.classList.remove("menu-opened");
});

// Close menu & remove overlay

// Add parallax effect
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  grassImage.style.transform = "translateY(" + -scrollPosition * 0.02 + "%)";
  mountainsImage.style.transform =
    "translateY(" + -scrollPosition * 0.04 + "%)";
  skyImage.style.transform = "translateY(" + -scrollPosition * 0.01 + "%)";
  heroData.style.transform = "translateY(" + scrollPosition * 0.03 + "%)";
  heroData.style.opacity = 1 - scrollPosition * 0.002;
});
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(".logo-box");
sr.reveal(".nav-item, a", { interval: 200 });
sr.reveal(".tagline-rando", { delay: 500 });
sr.reveal(".main-title, .btn-scroll-down", {
  origin: "top",
  delay: 1000,
});
sr.reveal(".footer, footer-nav", { interval: 200 });
sr.reveal(".card-info", { origin: "right" });
sr.reveal(".card-image", { origin: "left" });
