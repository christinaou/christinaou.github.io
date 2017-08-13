$(".section-button").click(function() {
  var type = $(this).attr("goto");
  $(".section-button").removeClass("active");
  $(this).addClass("active");
  $('html, body').animate({
    scrollTop: $("#" + type).offset().top - 153
  }, 500);
});