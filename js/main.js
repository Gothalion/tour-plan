$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom__visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalButton.on("keyCode == 27", closeModal);
  $(document).keydown(function (e) {
    if (e.key == "Escape") {
      closeModal(event);
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").addClass("modal-active");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("modal-active");
  }
  // Валидация
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Please enter at least 2 characters.",
        },
        email: {
          required: "Please specify your email",
          email: "Email address format: yourname@yourmail.com",
        },
        phone: {
          required: "Please specify your phone number",
          phone: "Phone number format: +7-(999)-999-99-99",
          minlength: "Please enter at least 11 characters.",
        },
      },
    });
  });

  // Phone mask
  $(".phone-mask").mask("+7(999) 999-99-9999");
});
