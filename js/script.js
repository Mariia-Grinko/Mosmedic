$(document).ready(function() {
    $('.js-implant-docs').slick({

        infinite: true,
        // prevArrow: $('.button-prew'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    swipe: true,
                }
            }
        ]
    });
    $('.js-implant-reviews').slick({

        infinite: true,
        // prevArrow: $('.button-prew'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    swipe: true,
                }
            }
        ]
    });
    $('.js-implant-example').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    swipe: true,
                }
            }
        ]
    });
});