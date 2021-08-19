import { Loader } from "@googlemaps/js-api-loader";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const loader = new Loader({
  apiKey: "AIzaSyB5fGMTq7egraWkSXhZhFXG_xgPyv1iUDQ",
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: 25.04553360123752,
    lng: 121.58071540641625,
  },
  zoom: 11,
  streetViewControl: false,
};
let test;

// const map = loader.load().then((google) => new google.maps.Map(document.getElementById("map"), mapOptions)
const markers = [];
const mapInit = (hotel_data) => {
  markers.splice(0, markers.length);
  // debugger;

  loader.load().then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    test = map;
    for (let i = 0; i < hotel_data.length; i++) {
      const coords = hotel_data[i].coordinates;
      const latLng = new google.maps.LatLng(coords[0], coords[1]);

      markers.push(
        new google.maps.Marker({
          position: latLng,
          map,
          animation: google.maps.Animation.DROP,
          icon: {
            path: faMapMarkerAlt.icon[4],
            fillColor: "#ffbd08",
            fillOpacity: 1,
            anchor: new google.maps.Point(
              faMapMarkerAlt.icon[0] / 2, // width
              faMapMarkerAlt.icon[1] // height
            ),
            strokeWeight: 0.5,
            scale: 0.09,
          },
        })
      );
    }
  });
};
const getGeolocation = (coords, index, isLeave) => {
  if (isLeave) {
    markers[index].setAnimation(null);
    markers[index].setZIndex(0);
  } else {
    markers[index].setAnimation(google.maps.Animation.BOUNCE);
    markers[index].setZIndex(3);
    test.setCenter({ lat: coords[0], lng: coords[1] });
  }
};

export { mapInit, getGeolocation };
