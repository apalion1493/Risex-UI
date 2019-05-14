$(document).ready(function(){
    $('.header-burger').click(function () {
        $(".right-menu").addClass('active');
    });
});

jQuery(function($){
    $(document).mouseup(function (e){
        var div = $(".right-menu");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".right-menu").removeClass('active');
        }
    });
});