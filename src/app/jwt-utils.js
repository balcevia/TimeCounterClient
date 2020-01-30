import * as Cookies from 'js-cookie';
import * as jwtDecode from 'jwt-decode';

const TOKEN_PATH = "token";

export const getToken = () => {
  return Cookies.get(TOKEN_PATH);
};

const isTokenExpired = (token) => {
  const expirationTime = jwtDecode(token).exp;
  return (Math.floor(Date.now() / 1000) - expirationTime) > 0;
};

export const isTokenValid = () => {
  const token = getToken();
  return token && !isTokenExpired(token)
};

export const setToken = (token) => {
  Cookies.set(TOKEN_PATH, token)
};

export const isLoggedIn = (token) => {
  if(token) {
    return !isTokenExpired(token);
  } else if(getToken()) {
    return !isTokenExpired(getToken());
  }
  return false;
};