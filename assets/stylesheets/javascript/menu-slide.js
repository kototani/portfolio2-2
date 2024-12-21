const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".right-menu");

setInterval(() => {
  $target.addClass(CLASSNAME);

  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT*2);