const galleryimages = document.querySelectorAll('.gallery-image');
const popupOverlay = document.querySelector('.popupOverlay');
const popup = document.querySelector('.popup');


const showImage = function(image){
    popupOverlay.style.display = 'block'
    popup.innerHTML = `<img src="${image.src}">`
}


galleryimages.forEach(image => {
    image.addEventListener('click',() => {
        showImage(image)
    })
})

popupOverlay.addEventListener('click',() => {
    popupOverlay.style.display = 'none'
})