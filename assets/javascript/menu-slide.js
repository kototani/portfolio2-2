const CLASSNAME = "-visible";
const TIMEOUT = 2000; // アニメーションのタイミング
const $target = $(".bg");

let swiper1, swiper2; // スライダーのインスタンスを保存

function initSwiper() {
    // PC版は縦方向、モバイル版は横方向にする
    const direction = window.innerWidth >= 769 ? 'vertical' : 'horizontal';

    // すでにインスタンスが存在していれば破棄する
    if (swiper1) swiper1.destroy(true, true);
    if (swiper2) swiper2.destroy(true, true);

    // Swiper の初期化
    swiper1 = new Swiper(".infinite-slider1", {
        loop: true,
        speed: 1000,
        autoplay: { delay: 2000 },
        rtl: true, // 右から左にスライド
        direction: direction, // スライド方向
    });

    swiper2 = new Swiper(".infinite-slider2", {
        loop: true,
        speed: 1000,
        autoplay: { delay: 2000, reverseDirection: true },
        direction: direction, // スライド方向
    });
}

$(function() {
    // 最初はサイトを非表示にする
    $(".mainSite").css("display", "none");

    // アニメーション開始
    setTimeout(() => {
        $target.addClass(CLASSNAME);  // bgのアニメーション開始
    }, TIMEOUT);

    // アニメーションが終わるタイミング（例えば、アニメーション終了後3秒後に実行）
    setTimeout(function() {
        // アニメーションが完了したら、anime要素をフェードアウト
        $('.menu-anime').fadeOut();

        // その後、サイトを表示
        $(".mainSite").css({ opacity: '0', display: 'block' }); // 表示をブロックに変更
        $(".mainSite").stop().animate({ opacity: '1' }, 1000); // 1秒でフェードイン

        // 初回のSwiper初期化
        initSwiper();
    }, 3500); // アニメーションの終了後3秒

    // リサイズ時にスライダーの方向を再設定
    $(window).on('resize', function() {
        initSwiper(); // リサイズ時に再初期化
    });
});