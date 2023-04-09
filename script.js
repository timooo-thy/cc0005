function updateResetDate() {
			const dateInput = document.getElementById("date");
			const resetDateInput = document.getElementById("reset-date");
			resetDateInput.value = dateInput.value;
		}

function displayMessage(message) {
    alert(message);
}


function initMap() {
      // create the first map
      const myLatLng1 = { lat: 1.3471, lng: 103.6808 };
      const myLatLng2 = { lat: 1.3432, lng: 103.6828 };

      // create a route map
      const routeMap = new google.maps.Map(document.getElementById("route"), {
        zoom: 18,
        center: myLatLng1,
      });

      // show the route between the two locations
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: routeMap,
      });
      const request = {
        origin: myLatLng1,
        destination: myLatLng2,
        travelMode: google.maps.TravelMode.WALKING,
      };
      directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        }
      });
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



