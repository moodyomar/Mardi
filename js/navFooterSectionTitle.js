// Global Vars If Needed
let flag = false;



// ----- D O M -----   
const burgerMenu = document.querySelector('.burgerMenu');
const navLinks = document.querySelector('.navLinks');
const navLinksLi = document.querySelectorAll('.navLinks li');
const headerContainer = document.querySelector('.headerContainer')
const sectionTitle = $('.SectionTitle h2')
const headerTitle = $('.headerTitle h1')



// ----- Functions -----
const randomBackground = function (bg) {
    let imgsArray = ['img17.webp', 'img13.jpg', 'img1.jpg', 'img15.jpg', 'img18.webp', 'img20.webp', 'img21.jpg', 'img22.jpg', 'img23.jpg', 'img24.jpg', 'img25.jpg'];
    let rndNumber = Math.floor(Math.random() * imgsArray.length)
    bg.style.backgroundImage = `url(images/site-images/${imgsArray[rndNumber]})`
}



// ----- Event Listerers -----
burgerMenu.addEventListener('click', () => {

    navLinks.classList.toggle('burgerNavActive');

    navLinksLi.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + .2}s`
        }

    });

    burgerMenu.classList.toggle('toggle');
})



// ----- Functions Excution -----
randomBackground(headerContainer)



// JQuery - Section Title animation
$("document").ready(function () {

    headerTitle
        .hide().
    slideDown(800);


    sectionTitle
        .animate({
            marginLeft: '-150%',
            opacity: '0'
        }, "slow");
    sectionTitle

    sectionTitle
        .animate({
            marginLeft: '0%',
            opacity: '1'
        }, "slow");

});