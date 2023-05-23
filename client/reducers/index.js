import { combineReducers } from "redux";
import tripReducer from "./tripReducer";
import dayReducer from "./dayReducer";

const reducers = combineReducers({
    trips: tripReducer,
    days: dayReducer,
})

export default reducers;