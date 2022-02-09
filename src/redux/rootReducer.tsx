import { combineReducers } from "redux";
import userReducer from "./comic/comicReducer";

const rootReducer = combineReducers({
  data: userReducer,
});

export default rootReducer;
