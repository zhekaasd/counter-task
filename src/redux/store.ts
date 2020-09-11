import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


const reducers = combineReducers({
    counterSettings: counterReducer
});

export const store = createStore(reducers);

export type AppRootStateType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store;