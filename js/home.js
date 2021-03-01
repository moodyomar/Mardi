// ----- D O M -----   

const headerTitle = document.querySelector('.headerTitle h1')
const headerTitle_p = document.querySelector('.headerTitle h5')
const scrollDownBtn = document.querySelector('#scrollDownBtn');
const SectionTitle = document.querySelector('.SectionTitle h2')
const SectionTitleAll = document.querySelectorAll('.SectionTitle h2');

const galleryimage = document.querySelector('.gallery-image');

// ----- Functions -----
function scrollToGallery() {
    galleryH2.scrollIntoView()
}

const delayElements = function (e,t) {
    // e.style.opacity = 0;
    setTimeout(() => {

        e.forEach((one => {
            one.style.animation = `slideLeft ${t}s`
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


// ----- Event Listerers -----
galleryimage.addEventListener('click',() => {
    console.log(galleryimage, 'clicked')
})


// scrollDownBtn.addEventListener('click', () => {
//     console.log('scroll');
// })




// ----- Functions Excution -----
delayElements(SectionTitleAll,2)
fadeInElement(headerTitle,4)
slideUpFading(headerTitle_p,1)
slideUpFading(scrollDownBtn,2)


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
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
