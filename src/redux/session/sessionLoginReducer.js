import { LOGIN } from "./sessionLoginTypes";

const initialState = {
  isLoggedIn: false,
};

const sessionLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default sessionLoginReducer;
