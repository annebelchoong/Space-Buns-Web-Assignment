//***********************Home Promotions Carousel Side js Starts**********************************
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Carousel Slide Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Carousel Slide Counter
let counter = 1;
const size = 700;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Carousel Slide Event Listeners
nextBtn.addEventListener('click', function () {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function () {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
//*******************Home Promotions Carousel Slide ENDS********************************

//Go top button js
var topBtn = document.getElementById("goTopBtn");

window.onscroll = function () { scrollingFunction() };

function scrollingFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function ReturnTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}