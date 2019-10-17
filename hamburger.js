//ハンバーガーメニュー
$(function () {
  $('.el_humburger').on('click', function () {
    spNavInout();
  });
});

//spナビ開く処理
function spNavIn() {
  $('body').removeClass('js_humburgerClose');
  $('body').addClass('js_humburgerOpen');
  $(".navigation").addClass("js_appear");
  $(".navigation").css({
    opacity: 0
  });
  $(".navigation").animate({
    opacity: 1
  }, 200);
  // scrollBlocker(true);
}

//spナビ閉じる処理
function spNavOut() {
  $(".navigation").animate({
    opacity: 0
  }, 200)
  $('body').removeClass('js_humburgerOpen');
  $('body').addClass('js_humburgerClose');
  setTimeout(function () {
    $(".navigation").removeClass("js_appear");
  }, 200);
  // scrollBlocker(false);
}

//spナビ開閉処理
function spNavInout() {
  if ($('body.spNavFreez').length) {
    return false;
  }
  if ($('body').hasClass('js_humburgerOpen')) {
    spNavOut();
  } else {
    spNavIn();
  }
}

//ナビ向けスクロール無効化処理

// var scrollBlockerFlag;

// function scrollBlocker(flag) {
//   if (flag) {
//     scrollpos = $(window).scrollTop();
//     $('body').addClass('js_fixed').css({
//       'top': -scrollpos
//     });
//     scrollBlockerFlag = true;
//   } else {
//     $('body').removeClass('js_fixed').css({
//       'top': 0
//     });
//     window.scrollTo(0, scrollpos);
//     scrollBlockerFlag = false;
//   }
// }