import React from 'react';
import '../App.css'
import './Settings.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {InitialType} from "../redux/counter-reducer";


const CounterDisplay = React.memo ( () => {

//обращаемся к нашему стейту с помощью хука 'useSelector' и достаем нужные нам данные
    let counterState = useSelector<AppRootStateType, InitialType>(state => state.counterSettings);

//локальный стейт с текстом для дисплея счётчика
    let title = ['Vvedite korrektnoe znachenie', "Nazhmite 'set' chto bi primenit nastroiki"];

//стилизаяция дисплея при достижении максимального значения
    let highlightCounter = counterState.value >= counterState.max ? 'active' : '';

    let displayed = counterState.editMode ? <div className={`blockCounterScreen + ${highlightCounter}`}> {counterState.value} </div> // отображается значение счётчика
        : (counterState.max === counterState.min || counterState.min < 0) ? <div className={`blockCounterScreen + active`}> {title[0]} </div> // отображается, если в инпуте введене некороектное значение
            : <div className={`blockCounterScreen`}>{title[1]}</div> //отображается, если мы меняем значение в инпуте

    return <div>{displayed}</div>
});


export default CounterDisplay;