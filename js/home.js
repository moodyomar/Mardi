// Global Vars If Needed
var slideIndex = 1;




// ----- D O M -----   

const mainHeaderTitle = document.querySelector('.headerTitle h1')
const headerTitle_p = document.querySelector('.headerTitle h5')
const scrollDownBtn = document.querySelector('#scrollDownBtn');




// ----- Functions -----
function scrollToGallery() {
    galleryH2.scrollIntoView()
}

const delayElements = function (e,t) {
    setTimeout(() => {
        e.forEach((one => {
            one.style.animation = `slideLeft ${t}s`
            one.style.display = "block"
        }))
    }, 2000)
}

const delayElement = function(e,t=2){

    setTimeout(() => {
       
        e.style.animation = `slideLeft ${t}s ease`
    }, 3000)
    console.log(e)
}

const fadeInElement =  function(e,t=2){
    e.style.animation = `fadeIn  ${t}s ease`
}

const slideUpFading = function(e,t=2){
    e.style.animation = `slideUpFading ${t}s ease`
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }


// ----- Event Listerers -----






// ----- Functions Excution -----
fadeInElement(mainHeaderTitle,3)
slideUpFading(headerTitle_p,1)
slideUpFading(scrollDownBtn,2)
showDivs(slideIndex);







