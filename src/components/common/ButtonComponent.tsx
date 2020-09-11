import React from "react";


type ButtonComponentPropsType = {
    onClick: () => void
    disabled: boolean
    icon?: React.ReactNode
    size?: string
    title?: string
    className: string
}

export function ButtonComponent(props: ButtonComponentPropsType) {
    return <button className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
}