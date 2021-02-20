var anchoVentana = $(window).width();



$(document).ready(function() {



    //Busca en el navegador la version, windows, linux o mac

    var navInfo = window.navigator.appVersion.toLowerCase();
    var so = 'Sistema Operativo';

    //Mete en una variable el valor de Navinfo dependiendo lo que encuentre
    function retornarSO() {
        if (navInfo.indexOf('win') != -1) {
            so = 'Windows';
        } else if (navInfo.indexOf('linux') != -1) {
            so = 'Linux';
        } else if (navInfo.indexOf('mac') != -1) {
            so = 'Macintosh';
        }
        return so;
    }




    //inicializa la funcion
    retornarSO();


    //Si en el 'so' se encontro alguno de estos dos valores ejecuta lo siguiente
    if (so == "Windows" || so == "Macintosh") {

        for (let i = 0; i <= 4; i++) {
            $(".bcg" + i).css("height", "190%");
        }

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
    } else {
        var menuToggle = $(".menuToggle");
        var checkbox = $("#check");



        //Funciones a ejecutar cuando se clickea el menu para abrirlo
        function openMenu() {
            menuToggle.css("display", "flex")
                .animate({ height: "100vh" });
        }

        //Funciones a ejecutar cuando se clickea el menu para cerrarlo
        function closeMenu() {

            menuToggle.animate({
                height: "0vh"
            });

            checkbox.attr("disabled", true);

            /*
                Deshabilita el check y espera 1,5 segundos para que se cierre el menu 
                y no se generen errores
            */
            setTimeout(function() {
                menuToggle.css("display", "none")
                checkbox.attr("disabled", false);
            }, 1500);

            //Rehabilita el check y le otorga la propiedad false
            checkbox.prop("checked", false);
        }


        //Llamado a las funciones correspondientes
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
    }



    //Propiedades del carrousel de descripciones
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