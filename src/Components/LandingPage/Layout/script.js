import $ from "jquery";

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $("#mynav");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });

$(document).ready(function () {
  $("#masterfab").hide();
  var banner_height = $("#mynav").height();
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var currScrollTop = $(this).scrollTop();
    if (scroll >= banner_height && currScrollTop > lastScrollTop) {
      $("#mynav").slideUp();
    } else {
      $("#mynav").slideDown();
    }
    lastScrollTop = currScrollTop;
    var docHeight =
      document.height !== undefined
        ? document.height
        : document.body.offsetHeight;
    if (scroll > docHeight / 2) {
      $("#masterfab").show();
    }
  });
});
