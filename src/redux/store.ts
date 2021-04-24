import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

/*--- Закидываем редьюсер в глобальный store ---*/
const reducers = combineReducers({
    counterSettings: counterReducer
});

/*--- Создание стора ---*/
export const store = createStore(reducers);

/*--- Типизация стора и редьюсера ---*/
export type AppRootStateType = ReturnType<typeof reducers>;
type AppStoreType = typeof store;

// @ts-ignore
window.store = store;