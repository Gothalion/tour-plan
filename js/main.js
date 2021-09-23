const swiper = new Swiper(".swiper", {
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
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [32.12, -81.16],
    zoom: 11,
  });
}
