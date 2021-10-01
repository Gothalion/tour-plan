const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  // Keyboard arrow control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom__visible");
});
