//scroll
var controller = new ScrollMagic.Controller();
//tiempo


var parallaxT1 = new TimelineMax();
parallaxT1.from('.bcg', 1, { y: '-50%', ease: Power0.easeNone }, 0);

//escenas
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    duration: '140%',
    triggerHook: 0.9
})

.setTween(parallaxT1)
    .addTo(controller)