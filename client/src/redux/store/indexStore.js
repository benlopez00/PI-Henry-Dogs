import { configureStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from  '../reducer/index';


export const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);