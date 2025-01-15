window.addEventListener('load', function () {
  const swiper1 = new Swiper(".infinite-slider1", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  // 手動でresizeイベントを発火させる
  window.dispatchEvent(new Event('resize'));

  const swiper2 = new Swiper(".infinite-slider2", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    rtl: true, // 右から左にスライド
  });
});