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
    }, 3500); // アニメーションの終了後3秒

});