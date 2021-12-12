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

let menuOpen = false;

menuDropdown.addEventListener('click', () => {
  if (!menuOpen) {
    menuDropdown.classList.add('open'); 
    menuOpen = true;
  } else {
    menuDropdown.classList.remove('open');
    menuOpen = false;
  }
})