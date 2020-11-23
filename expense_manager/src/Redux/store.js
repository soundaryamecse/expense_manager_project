import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginReducer from "./reducers/loginReducer"
import registerReducer from "./reducers/registerReducer";
import dashboardReducer from "./reducers/dashboardReducer"
import ledgerReducer from "./reducers/ledgerReducer"

const rootReducer = combineReducers({ login: loginReducer, register: registerReducer, dashboard: dashboardReducer, ledger: ledgerReducer});

const logger = (store) => (next) => (action) => {
  console.log("logger 1 dispatching action:", action);
  console.log("store", store);
  return next(action);
};

const thunk = (args) => ({ getState, dispatch }) => (next) => (action) => {
  console.log("inside thunk");
  if (typeof action === "function") {
    return action(dispatch, getState, args);
  }
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk(), logger))
);

console.log(store.getState());

// be careful when you use with combineReducers
// store.subscribe(throttle(() => saveData("state", store.getState()), 1000));