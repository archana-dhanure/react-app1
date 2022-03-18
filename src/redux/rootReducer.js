import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
import loginReducer from "./loginData/loginReducer";
import sessionLoginReducer from "./session/sessionLoginReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  UserLogin: loginReducer,
  session: sessionLoginReducer,
});

export default rootReducer;
