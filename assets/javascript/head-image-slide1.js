 // それぞれのSwiperインスタンスを個別に初期化
 const swiper1 = new Swiper(".infinite-slider1", {
  loop: true,
  speed: 1000, // スライドのスピード
  autoplay: { // 自動再生
    delay: 2000, // 1.5秒後に次のスライド
  },
});

const swiper2 = new Swiper(".infinite-slider2", {
  loop: true,
  speed: 1000, // スライドのスピード
  autoplay: { // 自動再生
    delay: 2100, // 1.5秒後に次のスライド
  },
  rtl: false, // 逆方向ではなく左から右にスライド
});