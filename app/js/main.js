$(function () {
    $('.portfolio__slider').slick({
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              },
            },
          ],
    });

    $('.reviews__slider').slick({
        dots: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            },
          },
        ],
    });
})