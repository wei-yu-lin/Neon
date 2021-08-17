import { Loader } from "@googlemaps/js-api-loader";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
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
  streetViewControl: false,
};

class googleMap {
  constructor(hotel_data) {
    this.mapOptions = {
      center: {
        lat: 25.04553360123752,
        lng: 121.58071540641625,
      },
      zoom: 11,
      streetViewControl: false,
    };
    this.hotel = hotel_data;
  }
  loaderMap() {
    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(
          document.getElementById("map"),
          this.mapOptions
        );
        this.mapInit(google, map);
      })
      .catch((err) => {
        document.getElementById("map").innerHTML =
          "ERROR(" + err.code + "): " + err.message;
      });
  }
  mapInit(google, map) {
    // const map = this.loaderMap();
    // console.log(this.hotel);
    for (let i = 0; i < this.hotel.length; i++) {
      const coords = this.hotel[i].coordinates;
      const latLng = new google.maps.LatLng(coords[0], coords[1]);
      new google.maps.Marker({
        position: latLng,
        map: map,
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
      });
    }
  }
}

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
      alert("沒反應");
    }
  });
};

export { googleMap, getGeolocation };
