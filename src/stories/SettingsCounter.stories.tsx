import SettingsCounter from "../components/SettingsCounter";
import {action} from "@storybook/addon-actions";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";


export default {
    title: "SettingsCounter Component",
    component: SettingsCounter,

}

export const SettingsCounterBaseExample = () => {
    return <Provider store={store}>
        <SettingsCounter stateValueMin={action('State min is called')} setChangedValue={action('Change value is called')} stateValueMax={action('State max is called')} />
    </Provider>
}