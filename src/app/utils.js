const serverUrl = 'https://localhost:8080/';

export const createRequestAction = (object) => {
  //const serverUrl = 'http://Timecounter-env.37hafnv7n9.us-east-2.elasticbeanstalk.com/';
  return createRequest(object, serverUrl);
};
const createRequest = ({types, url, method, body, successHandler}, server) => {
  const headers = {'Content-Type': 'application/json'};

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

export const fetchFileByPath = (path) => {
  const link = document.createElement('a');
  link.href = serverUrl + path;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const createFetchActionTypes = (type) => {
  return {
    BASE: `${type}_BASE`,
    PENDING: `${type}_PENDING`,
    FULFILLED: `${type}_FULFILLED`,
    REJECTED: `${type}_REJECTED`,
  }
};