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

    if(window.screen.width >= 768){
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
            bcg.style.transform = "translateY("+  scrollBcg * 0.1 + "px)";
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
        //Botones de leer mas
        menu();
    }
    
    
    const leerMasFullScreen = document.querySelector(".leerMasFullScreen");
    const opacidad = document.querySelector(".opacidad");
    const btnAriana = document.querySelector("#ariana");
    btnAriana.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre">Ariana Zigart</p>
        <img src="assets/img/ariana.jpg" alt="">
        <p class="descripcion">Ariana Zigart nació el 29 de junio del 2000 en Buenos Aires, Argentina. A los 6 años ingresó a un coro de niños dirigido por la Prof. Gladys Obertello y a la edad de 9 años comenzó a estudiar acordeón a piano. A los 13 años, ingresó al Conservatorio de Música “A. L. Schiuma” en donde estudia piano con la Prof. Graciela Burgos. 
        Ha participado de diversas masterclass con profesores internacionales y locales (Bernardino Beggio, Joana Holando, Daniel Goldstein, Diana Lopszyc, Natalia Gonzalez Figueroa, José Luis Juri, Pablo Vucetich, entre otros) y tuvo la oportunidad de tocar en conciertos, tanto solista, con conjuntos de cámara o como pianista acompañante, en diversos auditorios.
        Actualmente, se encuentra terminando el profesorado de Piano e incursionando en el mundo del tango con La Ortiba.</p>`;
        console.log(leerMasFullScreen);
        opacidad.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            opacidad.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });


    const btnGabriel = document.querySelector("#gabriel");
    btnGabriel.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre ">Gabriel Lamberghini</p>
        <img src="assets/img/gabo.jpg" alt="">
        <p class="descripcion">Gabriel Iván Lamberghini Serafini nació el 23 de octubre de 1998 en Buenos Aires, Argentina. A la edad de 11 años tuvo su primer contacto con la musica tomando clases de guitarra con Juan Hermelo. Al pasar los años fue formando diferentes grupos de Rock y Funk con sus compañeros del colegio. Al finalizar el secundario se produzco una ruptura en su vida el cual lo llevo a realizarse diferentes preguntas de introspección, en consecuencia esto lo llevo a estudiar un nuevo instrumento que fue el bandoneón. Completamente fascinado con este instrumento comenzó a estudiar con Carlos Viggiano, posteriormente musicalizar obras de teatro e ingresar a diferentes orquestas (La de Angelis Tango Club y Orquesta Tipica No Docente). Actualmente se encuentra realizando sus estudios con Horacio Romo y participando del grupo de tango La Ortiba.</p>               
        `;
        console.log(leerMasFullScreen);
        opacidad.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            opacidad.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });



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