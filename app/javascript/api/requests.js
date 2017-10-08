// import superagentPromise from 'superagent-promise';
import superagent from 'superagent';

// const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:5000/api/v1';

// const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
export const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

export const setRequestToken = _token => {
  token = _token;
}

export const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};
