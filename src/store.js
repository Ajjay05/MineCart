import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";

const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  rootReducers: reducer
});

const store = createStore(reducers, middleware);

export default store;
