const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");

$(function() {
    // 最初はサイトを非表示にする
    $(".mainSite").css("display", "none");
 
    // アニメーション開始
    setInterval(() => {
        $target.addClass(CLASSNAME);  // bgのアニメーション開始
    }, TIMEOUT);  // ここでアニメーションのタイミングを設定（2000ms後）
 
    // アニメーションが終わるタイミング（例えば、アニメーション終了後3秒後に実行）
    setTimeout(function() {
        // アニメーションが完了したら、anime要素をフェードアウト
        $('.menu-anime').fadeOut();
 
        // その後、サイトを表示
        $(".mainSite").css({ opacity: '0', display: 'block' }); // 表示をブロックに変更
        $(".mainSite").stop().animate({ opacity: '1' }, 1000); // 1秒でフェードイン
 
        // スライダーの初期化を行う
        const swiper1 = new Swiper(".infinite-slider1", {
            loop: true,
            speed: 1000,
            autoplay: { delay: 2000 },
            rtl: true, // 右から左にスライド
            on: {
                slideChange: function() {
                  // すべてのスライドからzoomInクラスを一旦削除
                  const slides = document.querySelectorAll('.swiper-slide img');
                  slides.forEach(slide => slide.classList.remove('zoomIn'));
            
                  // 現在のスライドにzoomInクラスを追加
                  const activeSlide = document.querySelector('.swiper-slide-active img');
                  activeSlide.classList.add('zoomIn');
                }
            }
        });
        const swiper2 = new Swiper(".infinite-slider2", {
            loop: true,
            speed: 1000,
            autoplay: { delay: 2100 },
            rtl: false,
        });
    }, 3500); // アニメーションの終了後3秒
 });