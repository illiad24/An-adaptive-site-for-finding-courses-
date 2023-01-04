(function () {
    const webflow = document.querySelector('.header__webflow')
    const close = document.querySelector('.webflow-header__close')
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.header__body')
    const menuClose = document.querySelector('.header__close')
    close.addEventListener('click', () => {
        webflow.classList.add('header__webflow-active')
    });
    burger.addEventListener('click', () => {
        menu.classList.add('header__body-active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__body-active')
    });
}());



$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        touchThreshold: 10,
        dots: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});


$('.slider').slick({
    slidesToShow: 4,
    dots: false,
    responsive: [
        {
            breakpoint: 1192,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1
            }
        },
    ]
});

// alert("ВТ хахахах");
// alert("ВТ хахахах");
// alert("ВТ хахахах");
// alert("ВТ хахахах");
// alert("вічка тупічка");
// alert("ХАЗБУЛА");
// alert("ХАХАХАХАХХАХАХАХАХАХХХХХХХХХХХХХХАХАХАХАХХАХАХАХАХАХАХАХАХАХ");