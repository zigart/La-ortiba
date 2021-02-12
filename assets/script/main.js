var anchoVentana = $(window).width();

$(document).ready(function() {
    if (anchoVentana > 768) {
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
            .addTo(controller)


        var scene2 = new ScrollMagic.Scene({
                triggerElement: '.parallaxIntegrantes',
                duration: '170%',
                triggerHook: 2
            }).setTween(parallaxT2)
            .addTo(controller)

        var scene3 = new ScrollMagic.Scene({
                triggerElement: '.parallaxShows',
                duration: '170%',
                triggerHook: 2
            }).setTween(parallaxT3)
            .addTo(controller)

        var scene4 = new ScrollMagic.Scene({
                triggerElement: '.parallaxContacto',
                duration: '134%',
                triggerHook: 2
            }).setTween(parallaxT4)
            .addTo(controller)
    };





    var owl = $('.owl-carousel');

    if ($(window).width() <= 768) {
        owl.owlCarousel({
            loop: true,
            items: 1,

        });
    } else {
        owl.owlCarousel({
            loop: true,
            items: 2,

        });
    }

    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel', [500]);
    });

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    });
});