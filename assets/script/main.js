//anclas del menu

// function scrollSection(i) {
//     i.scrollIntoView({
//         behavior: 'smooth'
//     });
// }


// document.querySelector("#quienesSomosMenu").addEventListener('click', function() {
//     scrollSection(document.querySelector(".quienesSomos"))
// });

// document.querySelector("#integrantesMenu").addEventListener('click', function() {
//     scrollSection(document.querySelector(".integrantes"))
// });

// document.querySelector("#showsMenu").addEventListener('click', function() {
//     scrollSection(document.querySelector(".shows"))
// });

// document.querySelector("#contactoMenu").addEventListener('click', function() {
//     scrollSection(document.querySelector(".contacto"))
// });

//scroll
var controller = new ScrollMagic.Controller();
//tiempo


var parallaxT1 = new TimelineMax();
parallaxT1.from('.bcg1', 1, { y: '-50%', ease: Power0.easeNone }, 0);

var parallaxT2 = new TimelineMax();
parallaxT2.from('.bcg2', 1, { y: '-50%', ease: Power0.easeNone }, 0);

var parallaxT3 = new TimelineMax();
parallaxT3.from('.bcg3', 1, { y: '-50%', ease: Power0.easeNone }, 0);

var parallaxT4 = new TimelineMax();
parallaxT4.from('.bcg4', 1, { y: '-50%', ease: Power0.easeNone }, 0);

//escenas
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.parallaxQuienesSomos',
    duration: '190%',
    triggerHook: 1
})

.setTween(parallaxT1)
    .addIndicators()
    .addTo(controller)


var scene2 = new ScrollMagic.Scene({
        triggerElement: '.parallaxIntegrantes',
        duration: '170%',
        triggerHook: 2
    }).setTween(parallaxT2)
    .addIndicators()
    .addTo(controller)

var scene3 = new ScrollMagic.Scene({
        triggerElement: '.parallaxShows',
        duration: '170%',
        triggerHook: 2
    }).setTween(parallaxT3)
    .addIndicators()
    .addTo(controller)

var scene4 = new ScrollMagic.Scene({
        triggerElement: '.parallaxContacto',
        duration: '134%',
        triggerHook: 2
    }).setTween(parallaxT4)
    .addIndicators()
    .addTo(controller)

$(document).ready(function() {

    var owl = $('.owl-carousel');


    owl.owlCarousel({
        loop: true,
        items: 2,

    });
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel', [500]);
    })

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    })
})