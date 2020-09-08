// simulate pressing tab to make it go away
// nav bar and menu
const mainNav = document.querySelector('.main-nav')
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    mainNav.classList.toggle('open');
});



// hero animation
gsap.fromTo('.hero-clipped', {
    scaleX: 0
}, {
    duration: 1,
    scaleX: 1
});

// logo animation
gsap.fromTo('.logo', {
    x: -200,
    opacity: 0
}, {
    duration: 1,
    delay: .5,
    x: 0,
    opacity: 1
});

// hamburger menu animation
gsap.fromTo('.hamburger-menu', {
    x: 200,
    opacity: 0
}, {
    duration: 1,
    delay: .8,
    x: 0,
    opacity: 1
});