window.addEventListener("load", () => {
  const infiniteSlider = new Swiper(".infinite-slider2", {
    loop: true,
    slidesPerView: "1",
    spaceBetween: 0,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    direction: 'rtl',  // スライド右方向
  });
});