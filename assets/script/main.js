//scroll
var controller = new ScrollMagic.Controller();
//tiempo
var parallaxTl = new TimelineMax();
parallaxTl.from('.content-wrapper', 1, { autoAlpha: 0.5, ease: Power0.easeNone }).from('.bcg', 1, { y: '-20%', ease: Power0.easeNone }, 0);


var scenep = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        duration: '100%',
        triggerHook: 0.9
    })
    .setTween(parallaxTl)

.addTo(controller)