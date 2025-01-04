window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".head-image-right", {
      loop: true,
      loopedSlides: 2,
      slidesPerView: "1",
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  });