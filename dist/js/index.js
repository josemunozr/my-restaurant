"use strict";

;(function () {

  var sticky = false;
  $("#stiky-navigation").removeClass("hidden");
  $("#stiky-navigation").slideUp(0);

  $(window).scroll(function () {
    var inBottom = isInBottom();

    if (inBottom && !sticky) {
      sticky = true; // Mostrar nevagacion stiky
      stickNavigation(true);
    }

    if (!inBottom && sticky) {
      sticky = false; // Ocultar nevagacion stiky
      stickNavigation(false);
    }
  });

  function stickNavigation(inBottom) {
    if (inBottom) {
      $("#description").addClass("fixed").removeClass("absolute");
      $("#navigation").slideUp("fast");
      $("#stiky-navigation").slideDown("fast");
    } else {
      $("#description").addClass("absolute").removeClass("fixed");
      $("#navigation").slideDown("fast");
      $("#stiky-navigation").slideUp("fast");
    }
  }

  function isInBottom() {
    var $description = $("#description");
    var descriptionHeight = $description.height();

    return $(window).scrollTop() > $(window).height() - descriptionHeight * 2;
  }
})();
