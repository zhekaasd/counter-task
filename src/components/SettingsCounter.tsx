import React, {ChangeEvent, useEffect} from 'react';
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


const SettingsCounter: React.FC<SettingsCounterPropsType> = React.memo ((props: SettingsCounterPropsType) => {

//обращаемся к нашему стейту с помощью хука 'useSelector' и достаем нужные нам данные
    let counterState = useSelector<AppRootStateType, InitialType>(state => state.counterSettings);

/*--- Устанавливаем минимальное значение из настроек счётчика на экране при перезагрузке ---*/
    useEffect( () => {
        changedOnClickHandler();
    }, [])

/*

    useEffect(() => {
        let valueAsStringMin = localStorage.getItem('counterValueMin');
        if (valueAsStringMin) {
            let currentValueMin = JSON.parse(valueAsStringMin);
            props.stateValueMin(currentValueMin);
        }
    }, []);


    useEffect(() => {
        let valueAsStringMax = localStorage.getItem('counterValueMax');
        if (valueAsStringMax) {
            let currentValueMax = JSON.parse(valueAsStringMax);
            props.stateValueMax(currentValueMax);
        }
    }, []);


    useEffect(() => {
        //localStorage.setItem('counterValueMin', JSON.stringify(counterState.min));
        localStorage.setItem('counterValueMax', JSON.stringify(counterState.max));
    }, [counterState.max]);


    useEffect(() => {
        //localStorage.setItem('counterValueMin', JSON.stringify(counterState.min));
        localStorage.setItem('counterValueMin', JSON.stringify(counterState.min));
    }, [counterState.min]);

*/


//считывает минимальное значение из инпута,переводит его из строки в число и сетает в "глобальный" стейт
    let changeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        let counterValueMin = JSON.parse(e.currentTarget.value);
        props.stateValueMin(counterValueMin);
    }


//считывает максимальное значение из инпута,переводит его из строки в число и сетает в "глобальный" стейт
    let changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        let counterValueMax = JSON.parse(e.currentTarget.value);
        props.stateValueMax(counterValueMax);
    }

//"сетает" минимальное значения в качестве значения счётчика
    let changedOnClickHandler = () => {
        props.setChangedValue(counterState.min);
    }


//стилизая "деактивации" кнопки, которая сохраняет значение в стейт и активирует счётчик
    const setDisableStyle = counterState.editMode || counterState.max === counterState.min || counterState.min < 0 ? 'buttonLowOpacity' : 'buttonNormal';
//правила "деактивации" кнопки "set"
    const disableSettingSet = (counterState.min === counterState.max || counterState.min < 0 || counterState.max === 0) ? !counterState.setSetting : counterState.setSetting;

    return (
        <div className='settingCounter'>
            <CounterValueSettings onChange={changeValueMax} min={counterState.min} value={counterState.max} title={'max value: '}/>
            <CounterValueSettings onChange={changeValueMin} value={counterState.min} max={counterState.max} title={'min value: '} min={-1}/>
            <div>
                <ButtonComponent className={setDisableStyle} size={"small"} onClick={changedOnClickHandler} disabled={ disableSettingSet } title={'set'}/>
            </div>
        </div>
    )
});


export default SettingsCounter;