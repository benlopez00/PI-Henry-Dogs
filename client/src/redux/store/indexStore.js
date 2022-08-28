import {applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from  '../reducer/indexReducer';


export const store = configureStore(
    {reducer:rootReducer},
    composeWithDevTools(applyMiddleware(thunk))
);