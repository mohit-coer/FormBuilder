
import { combineReducers } from "redux";
import reducer from "../questions/reducer";

const rootReducer = combineReducers({
  questionReducer: reducer,  
});

export default rootReducer;