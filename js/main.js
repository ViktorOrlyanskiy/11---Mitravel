'use strict'

const swiper1 = document.querySelector('.swiper1'),
    swiper2 = document.querySelector('.swiper2'),
    burger = document.querySelector('.burger'),
    closed = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu');


let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 105,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },
});
let swiperSlider2 = new Swiper(swiper2, {
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 105,

});

burger.addEventListener('click', () => {
    menu.classList.add('menu-visible');
})
closed.addEventListener('click', () => {
    menu.classList.remove('menu-visible')
})
