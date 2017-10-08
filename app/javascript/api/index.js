import { Auth } from './Auth'
import { Todo } from './Todo'
import { setRequestToken } from './requests'

export default {
  Auth,
  Todo,
  setToken: _token => { setRequestToken(_token); }
};
