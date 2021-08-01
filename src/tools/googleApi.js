// const  loadScript = () => {
//   let script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5fGMTq7egraWkSXhZhFXG_xgPyv1iUDQ";
//   document.body.appendChild(script);
// }

const initialize = () => {
  const mapOptions = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  };

  const map = new google.maps.Map(
    document.getElementById("map"),
    mapOptions
  );
}

export { initialize };
