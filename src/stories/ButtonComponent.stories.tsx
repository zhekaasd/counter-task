import {ButtonComponent} from "../components/common/ButtonComponent";
import {action} from "@storybook/addon-actions";
import React from "react";
import {Meta} from "@storybook/react";


export default {
    title: "ButtonComponent Component",
    component: ButtonComponent,
}




export const ButtonComponentEnableBaseExmaple = () => {
    return <ButtonComponent onClick={action('Click is called')} disabled={false} className={"buttonNormal"} title={'test'}/>
}

export const ButtonComponentDisableBaseExmaple = () => {
    return <ButtonComponent onClick={action('Click is called')} disabled={true} className={"buttonLowOpacity"} title={'test'}/>
}