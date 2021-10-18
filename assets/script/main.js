$(document).ready(function() {

    function menu() {
        let menuToggle = $(".menuToggle");
        let checkbox = $("#check");



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
    }
    
    menu();

    //Botones de leer mas
    const leerMasFullScreen = document.querySelector(".leerMasFullScreen");
    const btnAriana = document.querySelector("#ariana");
    btnAriana.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre">Ariana Zigart</p>
        <img src="assets/img/ariana.jpg" alt="ariana">
        <p class="descripcion">Ariana Zigart nació el 29 de junio del 2000 en Buenos Aires, Argentina. A los 6 años ingresó a un coro de niños dirigido por la Prof. Gladys Obertello y a la edad de 9 años comenzó a estudiar acordeón a piano. A los 13 años, ingresó al Conservatorio de Música “A. L. Schiuma” en donde estudia piano con la Prof. Graciela Burgos. 
        Ha participado de diversas masterclass con profesores internacionales y locales (Bernardino Beggio, Joana Holando, Daniel Goldstein, Diana Lopszyc, Natalia Gonzalez Figueroa, José Luis Juri, Pablo Vucetich, entre otros) y tuvo la oportunidad de tocar en conciertos, tanto solista, con conjuntos de cámara o como pianista acompañante, en diversos auditorios.
        Actualmente, se encuentra terminando el profesorado de Piano e incursionando en el mundo del tango con La Ortiba.</p>`;
        leerMasFullScreen.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            leerMasFullScreen.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });


    const btnGabriel = document.querySelector("#gabriel");
    btnGabriel.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre ">Gabriel Lamberghini</p>
        <img src="assets/img/gabo.jpg" alt="gabriel">
        <p class="descripcion">Gabriel Iván Lamberghini Serafini nació el 23 de octubre de 1998 en Buenos Aires, Argentina. A la edad de 11 años tuvo su primer contacto con la musica tomando clases de guitarra con Juan Hermelo. Al pasar los años fue formando diferentes grupos de Rock y Funk con sus compañeros del colegio. Al finalizar el secundario se produzco una ruptura en su vida el cual lo llevo a realizarse diferentes preguntas de introspección, en consecuencia esto lo llevo a estudiar un nuevo instrumento que fue el bandoneón. Completamente fascinado con este instrumento comenzó a estudiar con Carlos Viggiano, posteriormente musicalizar obras de teatro e ingresar a diferentes orquestas (La de Angelis Tango Club y Orquesta Tipica No Docente). Actualmente se encuentra realizando sus estudios con Horacio Romo y participando del grupo de tango La Ortiba.</p>               
        `;
        leerMasFullScreen.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            leerMasFullScreen.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });

    const btnKaren = document.querySelector("#karen");
    btnKaren.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre">Karen Selva</p>
        <img src="assets/img/karen.jpg" alt="karen">
        <p class="descripcion" >Karen Selva nació el 03 de Marzo de 1997 en Buenos Aires, Argentina. A la edad de 8 años tuvo su primer contacto con la música tomando clases de canto y coro con la profesora Marina Prá. Al pasar los años se adentró más en el mundo
        de la música, quedando fascinada por un instrumento, el violín, el cual comenzó a estudiar a los 13 años con el profesor Ernesto Picerno. Ella participó en diferentes conciertos y ensambles a medida que crecía musicalmente
        (coro Alluí, orquesta Cambalache, ensamble Trifoglio, entre otros). En el año 2013 comenzó sus estudios en el conservatorio de música Alfredo Luís Schiuma de San Martín. Actualmente se encuentra realizando el Profesorado de
        Violín en dicha institución con la profesora Carolina Chiappe y participando del grupo de tango La Ortiba.</p>`;
        leerMasFullScreen.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            leerMasFullScreen.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });

    const btnMartin = document.querySelector("#martin");
    btnMartin.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre">Martín Rivera</p>
        <img src="assets/img/martin.jpg" alt="martin">
        <p class="descripcion" >Juan Martín Rivera nació el 21 de mayo de 1999 en Remedios de Escalada, Buenos Aires. Comenzó sus estudios musicales en el Conservatorio de Música Julián Aguirre de Banfield en 2008. Ahí estudió guitarra con Gabriel Moncayo. En
        2014 empezó a estudiar violín. Estudió con Alejandro Schaikis y Pablo Sangiorgio (continúa en la actualidad) Al terminar la secundaria ingresa a la Universidad Católica Argentina para estudiar dirección orquestal (actualidad).
        Desde 2020 estudia canto con la soprano Marina Silva (actualidad). Se presentó como violinista en ensambles de cámara, bandas de música country/folk, integró coros y hoy es parte de la Orquesta Juvenil de Hurlingham y toca
        en el sexteto de tango "La Ortiba".</p>`;
        leerMasFullScreen.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            leerMasFullScreen.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });


    const btnLuca = document.querySelector("#luca");
    btnLuca.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre">Luca Eizaguirre</p>
        <img src="assets/img/luca.jpg" alt="luca">
        <p class="descripcion" >Luca Eizaguirre nació en Santa Rosa, La Pampa en septiembre de 1994. Comenzó sus estudios musicales de bajo y piano en 2007 en su ciudad natal, los cuales continúo en Buenos Aires al finalizar los estudios secundarios. Posteriormente,
        se graduó de la tecnicatura básica en el Conservatorio Manuel de Falla y, hoy en dia, cursa la Licenciatura en artes musicales en la UNA.</div>`;
        leerMasFullScreen.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            leerMasFullScreen.style.display = "none";
            leerMasFullScreen.innerHTML = "";
        });
    });




    const btnMartina = document.querySelector("#martina");
    btnMartina.addEventListener('click', function(){
        leerMasFullScreen.innerHTML = `
        <button class="cerrar">X</button>
        <p class="nombre">Martína Pastor</p>
        <img src="assets/img/martina.jpg" alt="martina">
        <p class="descripcion">Martina Pastor nació el 18 de septiembre del 2000. A la edad de 8 años toca en su colegio los profesores de la orquesta escuela san Martín y como resultado nació una fascinación por el instrumento que la acompaña hasta la actualidad,
        la viola. Inmediatamente ingresa al Conservatorio Alfredo Schiuma donde sigue perfeccionándose. Fue integrante de la Orquesta Juvenil Nacional y la Orquesta Juvenil Municipal y ganó dos años consecutivos becas de perfeccionamiento
        en el instrumento con músicos reconocidos de la Orq de Londres entre otros. Actualmente es estudiante del Instituto del Teatro Colón.</p>`;
        leerMasFullScreen.style.display = "flex";
        document.querySelector('.cerrar').addEventListener('click', function(){
            leerMasFullScreen.style.display = "none";
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