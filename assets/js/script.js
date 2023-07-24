$('.bottom-section-slider').slick({
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    slide: ".ourproperties__bottom__margin-width",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
            }
        }
    ]
});

$('.bottom-section-slider-v3').slick({
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    slide: ".popular-areas__bottom__margin-width",
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        },
        // {
        //     breakpoint: 991,
        //     settings: {
        //         slidesToScroll: 1,
        //         slidesToShow: 2,
        //     }
        // }
    ]
});