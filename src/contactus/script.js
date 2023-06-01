function initMap() {
    // Create a new map centered on the location of your office
    var officeLocation = { lat: 37.7749, lng: -122.4194 };
    var map = new google.maps.Map(document.getElementById("map"), {
      center: officeLocation,
      zoom: 16,
    });
  
    // Add a marker for your office location
    var marker = new google.maps.Marker({
      position: officeLocation,
      map: map,
      title: "Your Office Location",
    });
  }
  
  // Call the initMap function when the Google Maps API is loaded
  google.maps.event.addDomListener(window, "load", initMap);
  