import userReducer from "./userReducer";
import recipeReducer from "./recipeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	userReducer,
	recipeReducer,
})

export default rootReducer;
