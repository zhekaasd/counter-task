import React from "react";


type ButtonComponentPropsType = {
    onClick: () => void
    disabled: boolean
    //icon?: React.ReactNode
    size?: string
    title?: string
    className: string
}

export const ButtonComponent = React.memo((props: ButtonComponentPropsType) => {
    return <button className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
});