$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider-min"
    });
    $('.slider-min').slick({
        slidesToShow:3,
        asNavFor: ".slider",
        responsive: [
            {breakpoint: 768, 
             settings:{
                slidesToShow:2
             }

            },
            {breakpoint: 560, 
                settings:{
                   slidesToShow:1
                }
   
               }
        ]

    });
});