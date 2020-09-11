import {combineReducers, createStore} from "redux";
import {counterReducer, InitialType} from "../../redux/counter-reducer";
import {Provider} from "react-redux";
import React from "react";
import {AppRootStateType} from "../../redux/store";


const reducers1 = combineReducers({
    counterSettings: counterReducer
});

const globalInitialState = {
    max: 1,
    min: 0,
    value: 0,
    inc: true,
    reset: true,
    set: false,
    editMode: false
}

export const storybookStore1 = createStore(reducers1);

type Redtp = ReturnType<typeof reducers1>



export const ReduxStoreProviderDecorators = (storyFn: any) => {
    return <Provider store={storybookStore1}>{storyFn()}</Provider>
}