const getCookies = (names) => {
  const all_cookie = `; ${document.cookie}`;
  const part_cookie = all_cookie.split(`; ${names}=`);
  if (part_cookie.length === 2){
   const json_cookie = JSON.parse(part_cookie.pop());
   return json_cookie
  }
}


const setCookies = (names,value) => {
  document.cookie = `${names}=${JSON.stringify(value)}`;
}

const checkLogin = () =>{
  const json_cookie = getCookies('login');
  return json_cookie
}
export { getCookies, setCookies, checkLogin };