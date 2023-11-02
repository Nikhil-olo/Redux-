import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers"; // help to run asynchronus function
import thunk from "redux-thunk"


export const store =  createStore(reducers, {}, applyMiddleware(thunk))