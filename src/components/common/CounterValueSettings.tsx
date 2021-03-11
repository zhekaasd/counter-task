import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {InitialType} from "../../redux/counter-reducer";

type CounterValueSettingsPropsType = {
    min?: number
    max?: number
    title: string
    value?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void

}

export const CounterValueSettings = React.memo((props: CounterValueSettingsPropsType) => {

//обращаемся к нашему стейту с помощью хука 'useSelector' и достаем нужные нам данные
    let counterState = useSelector<AppRootStateType, InitialType>(state => state.counterSettings);

//стилизация инпута, для некоректно введенных сначений счётчика
    let compare = (counterState.max === counterState.min || counterState.min < 0) ? 'activeStyle' : 'defaultStyle';

    return <div>
        <div className={compare}>
            <span>{props.title}</span>
            <input type="number"
                   value={props.value}
                   onChange={props.onChange}
                   min={props.min}
                   max={props.max}
            />
        </div>
    </div>
});