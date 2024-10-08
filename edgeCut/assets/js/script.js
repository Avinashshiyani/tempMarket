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
  breakpoints: {
    640: {
      spaceBetween: 120,
    },
    1024: {
      spaceBetween: 200,
    },
  },
});

// hamburger code

let hamBurger = document.querySelector(".hamburger");
let frontHamburger = document.querySelector(".fronthamburger");
hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle('rotateham');
  frontHamburger.classList.toggle("bringmenu");
});
