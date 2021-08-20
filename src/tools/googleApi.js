import {
  Loader
} from "@googlemaps/js-api-loader";
import {
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
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
let refMap;

// const map = loader.load().then((google) => new google.maps.Map(document.getElementById("map"), mapOptions)
const markers = [];
const mapInit = () => {
  markers.splice(0, markers.length);
  loader.load().then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    refMap = map;
  });
};
const setMarkerAnimation = (coords, index, isLeave) => {
  if (isLeave) {
    markers[index].setAnimation(null);
    markers[index].setZIndex(0);
  } else {
    markers[index].setAnimation(google.maps.Animation.BOUNCE);
    markers[index].setZIndex(3);
    refMap.setCenter({
      lat: coords[0],
      lng: coords[1]
    });
  }
};

const addMarker = (newVal) => {
  for (let i = 0; i < newVal.length; i++) {
    const coords = newVal[i].coordinates;
    setTimeout(() => {
      markers.push(
        new google.maps.Marker({
          position: {
            lat: coords[0],
            lng: coords[1]
          },
          map: refMap,
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
    }, 10)
  }
};

export {
  mapInit,
  setMarkerAnimation,
  addMarker
};