(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.btn-trigger');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    
    // menu open close
    $btn.on('click', function() {
      $(this).toggleClass('active'); // クリックで.activeクラス追加
      if (!$nav.hasClass(open)) {
        $nav.addClass(open); // ナビゲーションメニュー表示
      } else {
        $nav.removeClass(open); // ナビゲーションメニュー非表示
      }
    });

    // mask close
    $mask.on('click', function() {
      $nav.removeClass(open);
      $btn.removeClass('active'); // メニューが閉じたときにハンバーガーボタンを元に戻す
    });
  })(jQuery);