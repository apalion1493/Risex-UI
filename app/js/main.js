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
