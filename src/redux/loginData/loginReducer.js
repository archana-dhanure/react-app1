import { LOGIN1, LOGOUT1 } from "./loginTypes";
const loginState = {
  isLoggedIn1: false,
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN1:
      return {
        ...state,
        isLoggedIn1: true,
      };
    case LOGOUT1:
      return {
        ...state,
        isLoggedIn1: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
