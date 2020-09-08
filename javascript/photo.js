// nav bar and menu
const mainNav = document.querySelector('.main-nav')
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    mainNav.classList.toggle('open'); // Q: @ 19:00, why are we adding it to mainNav not nav list class?
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

// hero-textbox animation
/*
        gsap.fromTo('.hero-textbox', {
            yPercent: 40, //@  54:29 use percentage because position is absolute
            opacity: 0
        }, {
            duration: 1,
            delay: 1.3,
            x: 0,
            // yPercent: -50,//problem: position is not back tonormal
            opacity: 1
        });
*/

// modal////
/*open modal function (image view or slide show)*/
function openModal() {
    /* show image viewer or modal when any image is clicked*/
    document.getElementById('my-modal').style.display = "inline-flex" //making modal visible
}

/*Close Modal (Image viewer) */
function closeModal() {
    document.getElementById('my-modal').style.display = "none" //making modal visible
}

/*Declare var slideIndex and initialise to 1*/
var slideIndexJS = 1;

/*Calling function showSlides() by passing variable slideIndexJS. This will hide all slides initially*/
showSlides(slideIndexJS);

/*Function to execute Next and Previous Buttons operation */
function changeSlides(n) {
    showSlides(slideIndexJS += n)
}

/*display img whose thumbnail is clicked*/
function currentSlide(n) {
    showSlides(slideIndexJS = n);
}

/* main function to operate the slide show or modal or image viewer */
function showSlides(n) {
    var i;

    /*get all ele with class "my-slides" */
    var slidesJS = document.getElementsByClassName("my-slides");

    /*If slide index is greater than total no. of slides, then open slideIndexJS =1 
    ie. begin with 1st slide after the last slide ends*/
    if (n > slidesJS.length) { slideIndexJS = 1; }

    /*If slide index is maller than total no. of slides , then open slideIndexJS = last
    ie scroll to last slide if click to previous button in first slide  */
    if (n < 1) { slideIndexJS = slidesJS.length; }

    /*hide slides initially */
    for (let i = 0; i < slidesJS.length; i++) {
        slidesJS[i].style.display = "none";
    }

    /*show slide which is clicked */
    slidesJS[slideIndexJS - 1].style.display = "block";
}