import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import currencyReducer from "./reducer";

let composeEnhancer = compose;

if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const storeConfig = () => {
  return createStore(currencyReducer, composeEnhancer(applyMiddleware(thunk)));
};

export default storeConfig;
