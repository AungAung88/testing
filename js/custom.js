$(document).ready(function () {

    var menu = $('.navbar-static-top');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar-static-top').addClass('sticky');
            // $('.content-section').addClass('menu-padding');
        } else {
            $('.navbar-static-top').removeClass('sticky');
            // $('.content-section').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;

});