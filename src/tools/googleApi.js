// const  loadScript = () => {
// let script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5fGMTq7egraWkSXhZhFXG_xgPyv1iUDQ";
// document.body.appendChild(script);
// }

const initMap = () => {
  navigator.geolocation.getCurrentPosition(success, error);
};

const success = () => {
  const mapOptions = {
    center: {
      lat: 25.078859763132783,
      lng: 121.5319733179921,
    },
    zoom: 12,
    streetViewControl: false,
  };
   const map = new google.maps.Map(document.getElementById("map"), mapOptions);
};

const setMarker = () => {
  // 建立一個新地標
  // const marker = new google.maps.Marker({
  //   // 設定地標的座標
  //   position: center,
  //   // 設定地標要放在哪一個地圖
  //   map: this.map,
  // });
};

const error = (err) => {
  document.getElementById("map").innerHTML =
    "ERROR(" + err.code + "): " + err.message;
};

export { initMap, setMarker };
