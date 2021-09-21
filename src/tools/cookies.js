const getCookies = (names) => {
  const all_cookie = `; ${document.cookie}`;
  const part_cookie = all_cookie.split(`; ${names}=`);
  if ((part_cookie.length === 2) & (part_cookie[1] != '')) {
    const jsonCookie = JSON.parse(part_cookie.pop());
    return jsonCookie;
  }
};

const setCookies = (names, value) => {
  document.cookie = `${names}=${JSON.stringify(value)}`;
};

const delCookies = (names) => {
  if (names == 'login'){
   const jsonCookie  = getCookies(names);
    const { user_id, password, username, token } = jsonCookie;
   document.cookie =
     names +
     "=" +
     (user_id ? ";user_id=" + user_id : "") +
     (password ? ";password=" + password : "") +
     (username ? ";username=" + username : "") +
     (token ? ";token=" + token : "");
  }
};

const checkLogin = () => {
  const jsonCookie = getCookies("login");
  return jsonCookie;
};
export { getCookies, setCookies, checkLogin, delCookies };
