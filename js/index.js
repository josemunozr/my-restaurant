/*if(navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js")
}*/

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
  checkScroll()
  isOpen()

  $(".menu-opener").on('click', toggleNav)

  $('.menu-link').on('click', toggleNav)

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
  
  $(window).scroll(checkScroll)

  function checkScroll() {
    const inBottom = isInBottom()

    if(inBottom && !sticky){
      sticky = true // Mostrar nevagacion stiky
      stickNavigation(true)
    }

    if(!inBottom && sticky){
      sticky = false // Ocultar nevagacion stiky
      stickNavigation(false)
    }
  }

  function isOpen(){
    const date = new Date()
    const current_hour = date.getHours()
    // abre a las 17 hrs y cierra a las 23 hrs
    if(current_hour < 17 || current_hour > 23){
      $("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 11:00pm")
    }
  }

  function toggleNav () {
    $('.nav-responsive ul').toggleClass('active')
    $('.menu-opener').toggleClass('fa-bars')
  }

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