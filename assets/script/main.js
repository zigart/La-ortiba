$(document).ready(function() {

    var anchoVentana = $(window).width();


    function menu() {
        var menuToggle = $(".menuToggle");
        var checkbox = $("#check");



        //Funciones a ejecutar cuando se clickea el menu para abrirlo
        function openMenu() {
            menuToggle.css("display", "flex")
             //Obtiene la altura del navBar y le alplica la propiedad en css para que no se superpongan
                .css('top', $(".navBar").height())
                .animate({ height: "100vh" });
        }

        //Funciones a ejecutar cuando se clickea el menu para cerrarlo
        function closeMenu() {
            menuToggle
            .animate({
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
    }

        function react(image){
            let getYposition = image.getBoundingClientRect().y;
            return getYposition - window.innerHeight;
        }
        const bcg1 = document.querySelector('.bcg1');
        const bcg2 = document.querySelector('.bcg2');
        const bcg3 = document.querySelector('.bcg3');
        const bcg4 = document.querySelector('.bcg4');

        function scrollParallax(bcg){
            let scrollBcg = bcg.getBoundingClientRect().top - window.innerHeight;
            bcg.style.transform = "translateY("+  scrollBcg * 0.1+ "px)";
            console.log(scrollBcg);
        }

        window.onscroll = function(){
            if(react(bcg1) < 0 || react(bcg1) === 0){
                scrollParallax(bcg1);
            }
            if(react(bcg2) < 0 || react(bcg2) === 0){
                scrollParallax(bcg2);
            }
            if(react(bcg3) < 0 || react(bcg3) === 0){
                scrollParallax(bcg3);
            }
            if(react(bcg4) < 0 || react(bcg4) === 0){
                scrollParallax(bcg4);
            }
        }
        menu();


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