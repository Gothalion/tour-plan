const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Keyboard arrow control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
});
