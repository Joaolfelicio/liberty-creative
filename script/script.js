$(document).ready(function () {
    $("a[href*=#]").on("click", function () {
      // Au clic sur un élément
      var page = $(this).attr("href"); // Page cible
      var speed = 500; // Durée de l'animation (en ms)
      $("html, body").animate({
          scrollTop: $(page).offset().top
        },
        speed,
        "swing"
      ); // Go
      return false;
    });
  });