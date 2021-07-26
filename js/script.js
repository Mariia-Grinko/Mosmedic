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
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});