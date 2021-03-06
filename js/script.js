// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

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


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

// $( document ).ready(function() {
//     $("[rel='tooltip']").tooltip();    
 
//     $('.overlay_thumbnail').hover(
//         function(){
//             $(this).find('.caption').slideDown(250); //.fadeIn(250)
//         },
//         function(){
//             $(this).find('.caption').slideUp(250); //.fadeOut(205)
//         }
//     ); 
// });