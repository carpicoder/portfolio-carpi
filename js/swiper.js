var swiper = new Swiper(".mySwiper", {

    breakpoints: {
        // when window width is >= 320px
        100: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        575: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        900: {
          slidesPerView: 3
        }
    },

    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});