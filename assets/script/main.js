window.addEventListener('load', () => {

    var quienesSomos = document.querySelector(".parallax"); {
        window.addEventListener('scroll', throttle(parallax, 1));

        function throttle(fn, wait) {
            let time = Date.now();
            return function() {
                if ((time + wait - Date.now()) < 0) {
                    fn();
                    time = Date.now();
                }
            }
        };

        function parallax() {
            let scrolled = window.pageYOffset;
            // cambiar la velocidad en 1
            let coords = (scrolled * 1) + 'px'
            quienesSomos.style.transform = 'translateY(' + coords + ')';
        };
    }

});