$(document).ready(function(){
    $('.header-burger').click(function () {
        $(".right-menu").addClass('active');
        $(".milk-shadow").addClass('active');
    });

    $('.right-menu__close').click(function () {
        $(".right-menu").removeClass('active');
        $(".milk-shadow").removeClass('active');
    });

    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
    });
});

jQuery(function($){
    $(document).mouseup(function (e){
        var div = $(".right-menu");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".right-menu").removeClass('active');
            $(".milk-shadow").removeClass('active');
        }
    });
});