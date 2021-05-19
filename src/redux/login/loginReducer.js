import { SET_AUTH } from './loginTypes';

const initialState = {
  auths: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      console.log('ss', state.auths);
      return {
        ...state,
        auths: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
