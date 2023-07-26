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

$('.bottom-section-slider-v4').slick({
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 2,
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
    ]
});

// slider
const rangeInput = document.querySelectorAll(".banner__price-field__right__slider__range-input input"),
    priceInput = document.querySelectorAll(".banner__price-field__right__slider__price-input input"),
    priceValue = document.querySelectorAll(".banner__price-field__left__left-box input"),
    progress = document.querySelector(".banner__price-field__right__slider__controller .banner__price-field__right__slider__controller__progress");

let priceGap = 1000;

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        //getting 2 values and parsing to numbers
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            }
            else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            priceValue[0].value = minVal;
            priceValue[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});