$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});