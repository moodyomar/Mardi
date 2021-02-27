const burgerMenu = document.querySelector('.burgerMenu');
const navLinks = document.querySelector('.navLinks');
const navLinksLi = document.querySelectorAll('.navLinks li');
const headerContainer = document.querySelector('.headerContainer')

let flag = false;
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

const randomBackground = function (bg) {
    let imgsArray = ['img17.webp','img13.jpg','img1.jpg','img15.jpg','img18.webp','img20.webp'];
    let rndNumber = Math.floor(Math.random() * imgsArray.length)
    bg.style.backgroundImage = `url(../images/site-images/${imgsArray[rndNumber]})`}

    randomBackground(headerContainer)
    