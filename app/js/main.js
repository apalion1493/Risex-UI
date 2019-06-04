document.addEventListener('DOMContentLoaded', function () {
    let menuActive       = document.querySelector('.header-burger');
    let menuClose        = document.querySelector('.right-menu__close');

    menuActive.onclick = function() {
        document.querySelector('.right-menu').classList.toggle('active');
        document.querySelector('.milk-shadow').classList.toggle('active');
    };

    menuClose.onclick = function() {
        document.querySelector('.right-menu').classList.remove('active');
        document.querySelector('.milk-shadow').classList.remove('active');
    };



    document.addEventListener('click', function (event) {

        if (!event.target.classList.contains('accordion-toggle')) return;

        var content = document.querySelector(event.target.hash);
        if (!content) return;

        event.preventDefault();

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            return;
        }

        var accordions = document.querySelectorAll('.accordion-content.active');
        for (var i = 0; i < accordions.length; i++) {
            accordions[i].classList.remove('active');
        }

        content.classList.toggle('active');

    });

    let el = document.querySelector('.accordion-toggle');
    el.onclick = function() {
        el.classList.toggle('active');
    };
});



