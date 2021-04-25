import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

/*--- Закидываем редьюсер в глобальный store ---*/
const reducers = combineReducers({
    counterSettings: counterReducer
});



/*--- Типизация стора и редьюсера ---*/
export type AppRootStateType = ReturnType<typeof reducers>;
type AppStoreType = typeof store;

/*--- Получаем данные из localStorage, чтобы отображать последнее сохраненное значение ---*/
let preloadedValue;
const persistedCounterValue = localStorage.getItem('app-counter');

/*--- Делаем проверку на псевдоистину ---*/
if (persistedCounterValue) {
    preloadedValue = JSON.parse(persistedCounterValue);
}

/*--- Создание стора ---*/
export const store = createStore(reducers, preloadedValue);

store.subscribe(() => {
    saveState({
        counterSettings: store.getState().counterSettings
    });
});



/*--- Вызываем метод подписки на событие у нашего стора, и подписываемся на изменения ---*/
store.subscribe(() => {
    localStorage.setItem('app-counter', JSON.stringify(store.getState()));
})

// @ts-ignore
window.store = store;



/*--- Вариант II ---*/

/*

const preloadedValue = loadState();
const store = createStore(reducers, preloadedValue);

store.subscribe(() => {
    saveState({
        counterSettings: store.getState().counterSettings
    });
});

*/


