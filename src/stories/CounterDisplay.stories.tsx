import CounterDisplay from "../components/CounterDisplay";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";


export default {
    title: "CounterDisplay Component",
    component: CounterDisplay,
}

export const CounterDisplayBaseExample = () => {
    return <Provider store={store}> <CounterDisplay /> </Provider>
}