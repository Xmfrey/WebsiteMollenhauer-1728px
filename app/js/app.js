const pagination = document.querySelectorAll(".swiper-pagination__item");

const advantagesSwiper = new Swiper(".advantagesSwiper", {
  speed: 600,
  navigation: {
    nextEl: ".advantages-slider-button-next",
    prevEl: ".advantages-slider-button-prev",
  },
  pagination: {
    el: ".advantages-slider__swiper-pagination",
    bulletClass: `swiper-pagination__item`,
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        pagination[index].innerHTML +
        "</span>"
      );
    },
  },
  mousewheel: true,
  keyboard: true,
});

const partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 4,
  loop: true,
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1170: {
      slidesPerView: 4,
    },
  },
  mousewheel: true,
  keyboard: true,
});

const reviewsSwiper = new Swiper(".reviewsSwiper", {
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".reviews-slider-button-next",
    prevEl: ".reviews-slider-button-prev",
  },
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
