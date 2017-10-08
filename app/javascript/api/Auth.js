import { requests } from './requests'

export const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/user_token', { auth: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};
