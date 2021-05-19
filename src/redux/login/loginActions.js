import { SET_AUTH } from './loginTypes';

export const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    payload: auth,
  };
};
