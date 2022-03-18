import { LOGIN1, LOGOUT1, REMOVE_SESSION1 } from "./loginTypes";

export const login = () => {
  return {
    type: LOGIN1,
  };
};

export const logout = () => {
  return {
    type: LOGOUT1,
  };
};

export const removeSession = () => {
  return {
    type: REMOVE_SESSION1,
  };
};
