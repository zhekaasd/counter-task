import React, {useCallback} from 'react';

import './App.css';
import CounterDisplay from "./components/CounterDisplay";
import SettingsCounter from "./components/SettingsCounter";
import {useDispatch} from "react-redux";
import {
  changeValueAC,
  resetValueAC,
  setChangedValueAC,
  setValueMaxAC,
  setValueMinAC
} from "./redux/counter-reducer";
import ControlButtonCounter from './components/ControlButtonCounter';



function App() {

//  const counterSettings = useSelector<AppRootStateType, InitialStateType>(state => state.counterSettings);
  const dispatch = useDispatch();


//функция изменяющая значения счётчика и дизейблещая кнопку
  const changeValue = useCallback ( () => {
    dispatch(changeValueAC());
  }, [dispatch] );

//функция сбрасывающая значение до минимального и дизейблющая кнопку 'reset'
  const resetValue = useCallback ( () => {
    dispatch(resetValueAC());
  }, [dispatch] );

//функция считывующая минимальное значение из инпута и отправляющая это значение в локальный стейт
  const stateValueMin = useCallback ( (valueMin: number) => {
    dispatch(setValueMinAC(valueMin));
  }, [dispatch] );

//функция считывующая максимальное значение из инпута и отправляющая это значение в локальный стейт
  const stateValueMax = useCallback ( (valueMax: number) => {
    dispatch(setValueMaxAC(valueMax));
  }, [dispatch] );

//функция добавляющая считанные значения и активирующая счётчик
  const setChangedValue = useCallback ( (valueVs: number) => {
    dispatch(setChangedValueAC(valueVs));
  }, [dispatch] );



  return (
      <div className='appWrapper'>
        <div className='wrapperBlock'>
          <div className={'container'}>
            <div style={ {display: "flex", flexDirection: "column", alignItems: "center"} }>
              <CounterDisplay />
              <ControlButtonCounter changeValue={changeValue} resetValue={resetValue} />
            </div>
            <div>
              <SettingsCounter setChangedValue={setChangedValue} stateValueMax={stateValueMax} stateValueMin={stateValueMin} />
            </div>
          </div>
        </div>
      </div>
  )
}


export default App;
