$(function () {


    $('.slider__inner').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.slider-menu__inner').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    })

})