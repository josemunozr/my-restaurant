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

  const my_place = {
    lat: -33.468819,
    lng: -70.57620199999997
  }

  google.maps.event.addDomListener(window, "load", () => {
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        center: my_place,
        zoom: 15
      }
    )

    const marker = new google.maps.Marker({
      map: map,
      position: my_place,
      title: 'My Restorant',
      visible: true
    })

    UserLocation.get((coords) => {
      // calcular distancia del restaurante segun localizacion de usuario
      let origen  = new google.maps.LatLng(coords.lat, coords.lng) // LatLng
      let destino = new google.maps.LatLng(my_place.lat, my_place.lng)

      let service = new google.maps.DistanceMatrixService()

      service.getDistanceMatrix({
        origins: [origen],
        destinations: [destino],
        travelMode: google.maps.TravelMode.DRIVING // manejando
      }, (response, status) => {
        if(status === google.maps.DistanceMatrixStatus.OK){
          const duration_element = response.rows[0].elements[0]
          const duracion_viaje = duration_element.duration.text
          // response.rows[0] -> primer origen
          // .rows[0].elements[0] -> primer destino

          document.querySelector('#message')
                  .innerHTML = `
                    Estás a ${duracion_viaje} del probar la mejor comida en
                    <span class="dancing-script medium">My Restorant</span>
                  `
        }
      })
    })

  })

})()