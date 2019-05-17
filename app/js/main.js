// $(document).ready(function(){
//     $('.header-burger').click(function () {
//         $(".right-menu").addClass('active');
//         $(".milk-shadow").addClass('active');
//     });
//
//     $('.right-menu__close').click(function () {
//         $(".right-menu").removeClass('active');
//         $(".milk-shadow").removeClass('active');
//     });
//
//     $('.switch-btn').click(function(){
//         $(this).toggleClass('switch-on');
//     });
// });
//
// jQuery(function($){
//     $(document).mouseup(function (e){
//         var div = $(".right-menu");
//         if (!div.is(e.target) && div.has(e.target).length === 0) {
//             $(".right-menu").removeClass('active');
//             $(".milk-shadow").removeClass('active');
//         }
//     });
// });

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


