import {getToken} from "./jwt-utils";

export const createRequestAction = (object) => {
  const serverUrl = 'http://Timecounter-env.37hafnv7n9.us-east-2.elasticbeanstalk.com/';
  //const serverUrl = 'http://localhost:5000/';
  return createRequest(object, serverUrl);
};
const createRequest = ({types, url, method, body, successHandler}, server) => {
  const token = getToken();
  const authHeader = token ? {'Authentication': `Bearer ${token}`}: {};
  const headers = method === "POST" ? {'Content-Type': 'application/json', ...authHeader} : {...authHeader};
  
  const param = {
    method,
    headers,
    body: JSON.stringify(body),
    credentials: 'include'
  };

  return {
    types,
    payload: fetch(server + url, param),
    fetchAction: true,
    successHandler: successHandler
  };
};

export const createFetchActionTypes = (type) => {
  return {
    BASE: `${type}_BASE`,
    PENDING: `${type}_PENDING`,
    FULFILLED: `${type}_FULFILLED`,
    REJECTED: `${type}_REJECTED`,
  }
};