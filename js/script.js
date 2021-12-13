// TYPEWRITER EFFECT FUNCTION

let i = 0;
const text = 'Hi, I am Brenton'; 
const speed = 125; 

const typeWriter = () => {
  if (i < text.length) {
    document.getElementById("header").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// SKILL HOVER

const skillItems = Array.from(document.getElementsByClassName('skillItem'));

skillItems.forEach(skillItem => {
skillItem.addEventListener('mouseover', () => {
skillItem.classList.add('flip');
});
skillItem.addEventListener('mouseout', () => {
skillItem.classList.remove('flip');
})
});

// JQUERY - SCROLL EFFECT

$(".portfolioLink").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#portfolio").offset().top
  }, 3500);
});

// CLICK EVENT FOR HAMBURGER MENU

const menuDropdown = document.querySelector('.fa-bars');
const menuItems = document.querySelectorAll('.item');

// let menuOpen = false;

// menuDropdown.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuDropdown.classList.add('open'); 
//     menuOpen = true;
//   }
// })

// menuDropdown.addEventListener('click', () => {
//     menuItems.classList.remove('open');
//     menuOpen = false;
// })

menuDropdown.addEventListener('click', () => {
  if (menuDropdown.style.display != 'hidden') {
    menuDropdown.style.display = 'hidden';
  } else {
    menuDropdown.style.display = 'inline-block';
  }
})



// const burgerMenu = document.querySelector(’.burger’);
// burgerMenu.addEventListener(‘click’, () => {
// const navlinks = document.querySelector(’.nav-links’);
// if(navlinks.style.transform != “translateX(0%)”) {
// navlinks.style.transform = “translateX(0%)”;
// } else {
// navlinks.style.transform = “translateX(100%)”;
// }
// })

