;(function () {

  class UserLocation {
    static get(callback) {
      
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((location) => {
          callback({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          })
        })

      }else{
        alert("No se pudo detectar lugar donde te encuentras")
      }
    }

  }

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

    UserLocation.get((coords) => {
      console.info(coords)
    })

  })

})()