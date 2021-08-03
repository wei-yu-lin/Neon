
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyB5fGMTq7egraWkSXhZhFXG_xgPyv1iUDQ",
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: 25.078859763132783,
    lng: 121.5319733179921,
  },
  zoom: 12,
  streetViewControl: false
};


const initPage = () => {
  const map = loader.load().then((google) => {
      new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch((err) => {
      document.getElementById("map").innerHTML =
      "ERROR(" + err.code + "): " + err.message;
    });
};

const getGeolocation = () => {
  const infoWindow = new google.maps.InfoWindow();
  loader.load().then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);



    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent(
            ["你家在", "X軸=" + pos.lat, "y軸" + pos.lng, "給我小心點"].join(
              "<br>"
            )
          );
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      alert("沒反應")
    }
  });
};


export { initPage, getGeolocation };
