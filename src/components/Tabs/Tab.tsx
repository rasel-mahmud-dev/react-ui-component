import React, {FC, ReactElement} from 'react';
import clsx from "clsx";

export interface TabProps {
    icon?: (isActive: boolean)=> React.ReactNode
    isActive?: boolean
    label: string
    className?: string
    onOpenTab?: ()=>void
}

const Tab : FC<TabProps> = (props) => {

    const {icon, onOpenTab, isActive, label, className} = props

    const classes = clsx(
        className,
        "tab-item",
        isActive && "tab-active"
    )

    return (
        <div>
            <div onClick={onOpenTab} className={classes}>
                {label}
                {icon ? icon(!!isActive) : null}
                <div className={`item-bar ${isActive ? "active-bar": "" }`}></div>
            </div>
        </div>
    );
};

export default Tab;