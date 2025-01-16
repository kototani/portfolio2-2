const CLASSNAME = "-visible";
const TIMEOUT = 2000; // アニメーションのタイミング
const $target = $(".bg");

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

        // Swiper の初期化
        const swiper1 = new Swiper(".infinite-slider1", {
            loop: true,
            speed: 1000,
            autoplay: { delay: 2000 },
            rtl: true, // 右から左にスライド
            // タッチイベントを無効にする
            noSwiping: true,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            simulateTouch: false,  // タッチのシミュレーションを無効にする
        });

        const swiper2 = new Swiper(".infinite-slider2", {
            loop: true,
            speed: 1000,
            autoplay: { delay: 2000, reverseDirection: true },
            noSwiping: true,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            simulateTouch: false,  // タッチのシミュレーションを無効にする
        });
    }, 3500); // アニメーションの終了後3秒
});