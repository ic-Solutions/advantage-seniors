var scroll_pos = 0;
// $(document).scroll(function () {
//   scroll_pos = $(this).scrollTop();
//   if (scroll_pos > 50) {
//     $(".navbar").css("background-color", "#4d62ad");
//   } else {
//     $(".navbar").css("background-color", "transparent");
//   }
// });

//Add background to navbar expansion on phone
$(".navbar-toggler").click(function () {
  if ($(this).hasClass("collapsed")) {
    $(".navbar").addClass("bg-primary-mobile");
  } else {
    $(".navbar").removeClass("bg-primary-mobile");
  }
});
