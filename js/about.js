// $(() => {
$("document").ready(function () {

    $('.headerTitle h1')
        .hide()
        .slideDown(800)

    $('.SectionTitle h2').animate({
        transform: 'translateX(50px)'
    }, 1500);


})