import {CounterValueSettings} from "../components/common/CounterValueSettings";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";


export default {
    title: "CounterValueSettings Component",
    component: CounterValueSettings
}

export const CounterValueSettingsBaseExample = () => {
    return <Provider store={store}><CounterValueSettings value={15} title={'Haha'} /></Provider>
}