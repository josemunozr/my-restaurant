"use strict";

;(function () {

  var sticky = false;
  var currentPosition = 0;

  var imageCounter = $("[data-name='image-counter']").attr("content");

  $("#stiky-navigation").removeClass("hidden");
  $("#stiky-navigation").slideUp(0);

  setInterval(function () {
    if (currentPosition < imageCounter) {
      currentPosition++;
    } else {
      currentPosition = 0;
    }

    $("#gallery .inner").css({
      left: "-" + currentPosition * 100 + "%"
    });
  }, 4000);

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
