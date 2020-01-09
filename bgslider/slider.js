var interval = 5000; /* Set time of interval in milliseconds */

window.onload = function() {
  $("ul.slider li")
    .hide()
    .last()
    .addClass("selected");
};

var timingRun = setInterval(function() {
  totalItems = $("ul.slider li").size();
  target = $("ul.slider li.selected").index() + 1;
  if (target >= totalItems) {
    target = 0;
  }
  img = $("ul.slider li.selected img").attr("src");
  $("#bg").fadeTo("500", 0.2, function() {
    $(this)
      .css("background-image", "url(" + img + ")")
      .fadeTo("500", 1, function() {});
  });
  $("ul.slider li")
    .removeClass("selected")
    .eq(target)
    .addClass("selected");
}, interval);
