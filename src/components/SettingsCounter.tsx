import React, {ChangeEvent} from 'react';
import '../components/Settings.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {InitialType} from "../redux/counter-reducer";
import {ButtonComponent} from "./common/ButtonComponent";
import {CounterValueSettings} from "./common/CounterValueSettings";



type SettingsCounterPropsType = {
    stateValueMin: (valueMin: number) => void
    setChangedValue: (value: number) => void
    stateValueMax: (valueMax: number) => void
}


const SettingsCounter = React.memo( (props: SettingsCounterPropsType) => {

//обращаемся к нашему стейту с помощью хука 'useSelector' и достаем нужные нам данные
    let counterState = useSelector<AppRootStateType, InitialType>(state => state.counterSettings);


//считывает минимальное значение из инпута,переводит его из строки в число и сетает в "глобальный" стейт
    let changeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        let asdf = Number(e.currentTarget.value);
        props.stateValueMin(asdf);
    }


//считывает максимальное значение из инпута,переводит его из строки в число и сетает в "глобальный" стейт
    let changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        let asdf = Number(e.currentTarget.value);
        props.stateValueMax(asdf);
    }

//"сетает" минимальное значения в качестве значения счётчика
    let changedOnClickHandler = () => {
        props.setChangedValue(counterState.min);
    }


//стилизая "деоктивации" кнопки, которая сохраняет значение в стейт и активирует счётчик
    const setDisableStyle = counterState.editMode || counterState.max === counterState.min || counterState.min < 0 ? 'buttonLowOpacity' : 'buttonNormal';
//правила "деоктивации" кнопки "set"
    const disableSettingSet = (counterState.min === counterState.max || counterState.min < 0 || counterState.max === 0) ? !counterState.set : counterState.set;

    return (
        <div className='settingCounter'>
            <CounterValueSettings onChange={changeValueMax} min={counterState.min} value={counterState.max} title={'max value: '}/>
            <CounterValueSettings onChange={changeValueMin} value={counterState.min} max={counterState.max} title={'min value: '} min={-1}/>
            <div>
                <ButtonComponent className={setDisableStyle} size={"small"} onClick={changedOnClickHandler} disabled={ disableSettingSet } title={'set'}/>
            </div>
        </div>
    )
} );


export default SettingsCounter;