// Global Vars If Needed
var slideIndex = 1;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;



// ----- D O M -----   

const mainHeaderTitle = document.querySelector('.headerTitle h1')
const headerTitle_p = document.querySelector('.headerTitle h5')
const scrollDownBtn = document.querySelector('#scrollDownBtn');
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
sponsorCards = document.querySelectorAll('.sponsorCard')
h3s = document.querySelectorAll('.sponsorCard h3')

// ----- Functions -----
function scrollToGallery() {
    galleryH2.scrollIntoView()
}

const delayElements = function (e, t) {
    setTimeout(() => {
        e.forEach((one => {
            one.style.animation = `slideLeft ${t}s`
            one.style.display = "block"
        }))
    }, 2000)
}

const delayElement = function (e, t = 2) {

    setTimeout(() => {

        e.style.animation = `slideLeft ${t}s ease`
    }, 3000)
    console.log(e)
}

const fadeInElement = function (e, t = 2) {
    e.style.animation = `fadeIn  ${t}s ease`
}

const slideUpFading = function (e, t = 2) {
    e.style.animation = `slideUpFading ${t}s ease`
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// ----- Event Listerers -----

if (viewportWidth > 1100) {
    /* showing sponsor title on hovering - only desktop */
    sponsorCards.forEach((card, cardIndex) => {
        card.addEventListener('mouseenter', function () {
            // console.log('card:',card,'cardIndex:',cardIndex)
            h3s.forEach((h3, h3Index) => {
                // console.log('h3:',h3,'index',index)
                if (h3Index == cardIndex) {
                    // console.log('match', h3Index, cardIndex)
                    h3.style.transform = 'translateY(0px)';
                    h3.style.opacity = 1;
                    h3.style.opacity = 1;
                }
            })
        })
    })
    sponsorCards.forEach((card, cardIndex) => {
        card.addEventListener('mouseleave', function () {
            h3s.forEach((h3, h3Index) => {
                if (h3Index == cardIndex) {
                    h3.style.transform = 'translateY(60px)'
                    h3.style.opacity = 0;
                }
            })
        })
    })

}

// ----- Functions Excution -----
fadeInElement(mainHeaderTitle, 3)
slideUpFading(headerTitle_p, 1)
slideUpFading(scrollDownBtn, 2)
showSlides(slideIndex);




