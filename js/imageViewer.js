const $galleryimages = $('.gallery-item img')
const $popupOverlay = $('.popupOverlay')
const $popup = $('.popup')

const showImage = function(image){
    $popupOverlay.fadeIn(500)
    $popup.html(`<img src="${image.src}" alt="Mardi Gras Glllery Photo" >`)
    
}


$galleryimages.each((index, image) => {
    image.addEventListener('click', () => {
        showImage(image)
    })
})

$popupOverlay.on('click', () => {
    $popupOverlay.fadeOut(200)
})

