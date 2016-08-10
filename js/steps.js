;(function () {

  const selector = "#contact-form"

  $(selector)
    .find(".input")
    .on("change", (ev) => {
      let $input = $(ev.target)
      let $next_step = $input.parent().next(".step")


      if($next_step.length > 0) {
        next($next_step)
      }else {
        validar_furmulario()
      }

    })
  // Helpers

  function validar_furmulario () {
    if (es_valido_fomulario()) {

    }else {
      let $fieldset_invalid =  $(selector).find(".input:invalid").first().parent()
      next($fieldset_invalid)
    }
  }

  function es_valido_fomulario () {
    return document.querySelector(selector).checkValidity()
  }

  function next ($next_step) {
    $(".step.active").removeClass("active")
    $next_step.addClass("active")
    $next_step.find(".input").focus()
  }

})()