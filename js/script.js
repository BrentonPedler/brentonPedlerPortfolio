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

const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
})

document.querySelectorAll('.item').forEach(e => e.addEventListener('click', () => {
  menu.classList.remove('active');
}))

// PROJECT CAROUSEL

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // next or previous image
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button
            .closest('[data-carousel]')
            .querySelector('[data-slides]');
        
            const activeSlide = slides.querySelector('[data-active]');
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
    })
})



