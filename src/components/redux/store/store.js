import { createStore, combineReducers } from "redux";
import { UsersReducer } from "../reducers/reducers";


const reducers = combineReducers({
  users: UsersReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
