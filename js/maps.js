;(function () {
  google.maps.event.addDomListener(window, "load", () => {
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        center: {
          lat: -33.468819,
          lng: -70.57620199999997
        },
        zoom: 15
      }
    )
  })

})()