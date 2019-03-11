// Reload iframe script at click-back for Android Browser
(function($) {
  $(window).on("pageshow", function() {
    $("iframe").each(function() {
      $(this).attr("src", $(this).attr("src"));
    });
  });
})(jQuery);
