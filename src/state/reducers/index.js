import {combineReducers} from "redux";
import amountReducer from "./amountReduxer";

const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;