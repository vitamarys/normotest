$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                arrows: false,
                slidesToShow: 4
                
               
              }
            },
            {
                breakpoint: 769,
                settings: {
                  arrows: false,
                  slidesToShow: 3
                  
                 
                }
              },
              {
                breakpoint: 813,
                settings: {
                  arrows: false,
                  slidesToShow: 3
                  
                 
                }
              },
            {
              breakpoint: 376,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
 
})