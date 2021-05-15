$(function () {
    $('.portfolio__slider').slick({
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
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
            breakpoint: 1024,
            settings: {
              arrows: false,
            },
          },
        ],
    });
})