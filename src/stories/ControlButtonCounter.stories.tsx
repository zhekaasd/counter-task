import ControlButtonCounter from "../components/ControlButtonCounter";
import React from "react";
import {action} from "@storybook/addon-actions";
import {ReduxStoreProviderDecorators, storybookStore1} from "./decorators/ReduxStoreProviderDecorators";
import {Provider} from "react-redux";


export default {
    title: 'ControlButtonCounter Component',
    component: ControlButtonCounter,
    decorators: [ReduxStoreProviderDecorators]
}

export const ControlButtonCounterBaseExample = () => {
    return <ControlButtonCounter changeValue={action('change value is called')} resetValue={action('reset is called')} />
}