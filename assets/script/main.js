//scroll
var controller = new ScrollMagic.Controller();
//tiempo


var parallaxT1 = new TimelineMax();
parallaxT1.from('.bcg1', 1, { y: '-50%', ease: Power0.easeNone }, 0);

var parallaxT2 = new TimelineMax();
parallaxT2.from('.bcg2', 1, { y: '-50%', ease: Power0.easeNone }, 0);


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


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
    });
});