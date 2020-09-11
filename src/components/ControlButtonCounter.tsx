import React from 'react';
import './../App.css'
import './Settings.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {InitialType} from "../redux/counter-reducer";
import {ButtonComponent} from "./common/ButtonComponent";


type ControlButtonCounterPropsType = {
    changeValue: (value: number) => void
    resetValue: () => void
}



const ControlButtonCounter = React.memo( (props: ControlButtonCounterPropsType) => {

//обращаемся к нашему стейту с помощью хука 'useSelector' и достаем нужные нам данные
    let counterState = useSelector<AppRootStateType, InitialType>( state => state.counterSettings);

//колбек функция, которая изменяет значение счётчика и возвращает нам нужное значение
    let changeCounterValue = () => {
        let newValue = counterState.value;
        props.changeValue(newValue);
    }
//обработчик, который сбрасывает значение счётчика
    let resetCounterValue = () => {
        props.resetValue();
    }

//стилизая "дизейбла" кнопок "reset" и "inc"
    let resetDisableStyle = counterState.reset ? 'buttonLowOpacity' : 'buttonNormal';
    let incDisableStyle = counterState.inc ? 'buttonLowOpacity' : 'buttonNormal';


    return (
        <div className='blockCLickButton'>
            <ButtonComponent onClick={changeCounterValue} disabled={counterState.inc} title={'inc'}  className={incDisableStyle} />
            <ButtonComponent onClick={resetCounterValue} disabled={counterState.reset} title={'reset'} className={resetDisableStyle} />
        </div>
    )
} );


export default ControlButtonCounter;