const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const icon = document.querySelector('.menu i');

menu.addEventListener("click", () => {
  nav.classList.toggle("active");

  
  if (nav.classList.contains('active')) {
    icon.className = 'far fa-window-close'
  } else {
    icon.className = 'fas fa-bars'
  }


});

document.addEventListener("scroll", () => {
  if (nav.classList.contains('active')) {
    nav.classList.toggle("active");
    icon.className = 'fas fa-bars';
  }
});


