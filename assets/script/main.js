var anchoVentana = $(window).width();



$(document).ready(function() {


    navegador = navigator.userAgent; //busco el "userAgent" del usuario.
    console.log(navigator);
    //lista de palabras del "userAgent" en los móviles

    const userAgent = navigator.userAgent.toLowerCase();



    moviles = ["Mobile", "ipad", "tablet", "Android", "iPhone", "iPod", "BlackBerry", "Opera Mini", "Sony", "MOT", "Nokia", "samsung"];

    detector = 0; //Variable que detectará si se usa un móvil

    for (i in moviles) { //comprobar en la lista ...

        //si el método "indexOf" no devuelve -1, indica que la palabra está en el "userAgent"

        compruebo = navegador.indexOf(moviles[i]);

        if (compruebo > -1) {

            detector = 1; //Si es un móvil, cambio el valor del detector

        }
    }
    if (detector == 1) {

        var menuToggle = $(".menuToggle");
        var checkbox = $("#check");

        function openMenu() {
            menuToggle.css("display", "flex")
                .animate({ height: "100vh" });
        }

        function closeMenu() {

            menuToggle.animate({
                height: "0vh"
            });

            checkbox.attr("disabled", true);

            setTimeout(function() {
                menuToggle.css("display", "none")
                checkbox.attr("disabled", false);
            }, 1500);

            checkbox.prop("checked", false);
        }

        checkbox.click(function() {
            if (checkbox.prop('checked') == true) {
                openMenu();
            } else {
                closeMenu();
            }
        })

        $(".linkMenu").click(function() {
            closeMenu();
        })



        //Obtiene la altura del navBar y le alplica la propiedad en css para que no se superpongan
        menuToggle.css('top', $(".navBar").height());
    } else {



        $(".bcg1").css("height", "190%");
        $(".bcg2").css("height", "190%");
        $(".bcg3").css("height", "190%");
        $(".bcg4").css("height", "190%");

        //Se inicia la libreria
        var controller = new ScrollMagic.Controller();

        //Se define los objetos del dom que utilizaran el efecto

        var propiedadesParallax = { y: '-50%', ease: Power0.easeNone }

        var parallaxT1 = new TimelineMax();
        parallaxT1.from('.bcg1', 1, propiedadesParallax, 0);

        var parallaxT2 = new TimelineMax();
        parallaxT2.from('.bcg2', 1, propiedadesParallax, 0);

        var parallaxT3 = new TimelineMax();
        parallaxT3.from('.bcg3', 1, propiedadesParallax, 0);

        var parallaxT4 = new TimelineMax();
        parallaxT4.from('.bcg4', 1, propiedadesParallax, 0);

        //Propiedades del efecto parallax

        var scene1 = new ScrollMagic.Scene({
                triggerElement: '.parallaxQuienesSomos',
                duration: '190%',
                triggerHook: 1
            })
            .setTween(parallaxT1)
            .addTo(controller);


        var scene2 = new ScrollMagic.Scene({
                triggerElement: '.parallaxIntegrantes',
                duration: '170%',
                triggerHook: 2
            }).setTween(parallaxT2)
            .addTo(controller);


        var scene3 = new ScrollMagic.Scene({
                triggerElement: '.parallaxShows',
                duration: '170%',
                triggerHook: 2
            }).setTween(parallaxT3)
            .addTo(controller);


        var scene4 = new ScrollMagic.Scene({
                triggerElement: '.parallaxContacto',
                duration: '134%',
                triggerHook: 2
            }).setTween(parallaxT4)
            .addTo(controller);
    }



    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        responsive: {
            0: { items: 1 },
            1024: { items: 2 }
        },

    });


    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel', [500]);
    });

    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    });
});