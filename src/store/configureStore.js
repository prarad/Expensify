import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import confirmationModalReducer from '../reducers/confirmationModal.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer,
      confirmationModalIsOpen: confirmationModalReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
