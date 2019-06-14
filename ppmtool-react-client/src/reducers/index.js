import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import ProjectReducer from "./ProjectReducer";
import backlogReducer from "./backlogReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducers,
  project: ProjectReducer,
  backlog: backlogReducer,
  security: securityReducer
});
