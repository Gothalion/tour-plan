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
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});
