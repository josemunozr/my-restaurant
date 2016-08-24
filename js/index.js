;(function () {
  
  let sticky = false
  let currentPosition = 0

  const imageCounter = $("[data-name='image-counter']").attr("content")
  const email = "jozeepp@gmail.com"
  
  $("#contact-form").on("submit", function (ev) {
    ev.preventDefault()

    sendForm($(this))

    return false
  })

  $("#stiky-navigation").removeClass("hidden")
  $("#stiky-navigation").slideUp(0)

  setInterval(() => {
    if(currentPosition < imageCounter){
      currentPosition++
    }else{
      currentPosition = 0
    }

    $("#gallery .inner").css({
      left: "-"+ currentPosition*100 +"%"
    })

  },4000)
  
  $(window).scroll(() => {
    const inBottom = isInBottom()

    if(inBottom && !sticky){
      sticky = true // Mostrar nevagacion stiky
      stickNavigation(true)
    }

    if(!inBottom && sticky){
      sticky = false // Ocultar nevagacion stiky
      stickNavigation(false)
    }
  })

  function stickNavigation(inBottom) {
    if(inBottom){
      $("#description").addClass("fixed").removeClass("absolute")
      $("#navigation").slideUp("fast")
      $("#stiky-navigation").slideDown("fast")
    }else{
      $("#description").addClass("absolute").removeClass("fixed")
      $("#navigation").slideDown("fast")
      $("#stiky-navigation").slideUp("fast")
    }
  }

  function isInBottom() {
    const $description = $("#description");
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
  }

})()