;(function () {

  const selector = "#contact-form"

  $(".step textarea").on("keydown", (ev) => {
    if(ev.keyCode == 13) {
      ev.preventDefault()
      $(ev.target).blur()
    }
  })

  $(".path-step").on("click", (ev) => {
    const $current_circle = $(ev.target)

    focus_circle($current_circle)

    
    const position = $current_circle.index(".path-step") + 1

    let $test = $(".step:nth-child("+ position +")")

    next($test)
  })

  $(selector)
    .find(".input")
    .on("change", (ev) => {
      const $input = $(ev.target)
      const $next_step = $input.parent().next(".step")
      const is_form_valid = validar_furmulario()

      if(!is_form_valid && $next_step.length > 0) {
        next($next_step)
      }else {
        validar_furmulario()
      }

    })
  // Helpers

  function validar_furmulario () {
    if (es_valido_fomulario()) {
      send_form()
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

    // cordinar circles
    const position = ($next_step.index(".step") * 2 ) + 1

    
    const $circle = $(".path-step:nth-child("+ position +")").addClass("active")
    focus_circle($circle)
  }

  function focus_circle($circle) {
    $(".path-step.active").removeClass("active")
    $circle.addClass("active")
  }

  function send_form() {
    const $form = $(selector)
    $.ajax({
        url: $form.attr("action"),
        method: "POST",
        data: $form.formObject(),
        dataType: "json"
    })
    .then(function () {
      $form.slideUp()
      $("#info-msg").html("Enviamos tu mensaje, nos pondremos en contacto")
    })
  }

})()