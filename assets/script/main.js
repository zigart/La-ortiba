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
    triggerHook: 0.9
})

.setTween(parallaxT1)
    .addIndicators()
    .addTo(controller)


var scene2 = new ScrollMagic.Scene({
        triggerElement: '.parallaxIntegrantes',
        duration: '140%',
        triggerHook: 0.9
    }).setTween(parallaxT2)
    .addIndicators()
    .addTo(controller)