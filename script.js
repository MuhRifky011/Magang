function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
navMenu.classList.toggle("activate");
});