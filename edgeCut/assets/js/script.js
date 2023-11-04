var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
      },
    navigation: {
        nextEl: ".right-swipe",
        prevEl: ".left-swipe",
    },
});