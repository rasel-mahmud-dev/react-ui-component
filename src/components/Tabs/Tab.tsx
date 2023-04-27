import {FC, ReactNode} from 'react';
import clsx from "clsx";

export interface TabProps {
    icon?: (isActive: boolean)=> ReactNode
    isActive?: boolean
    label: ((isActive: boolean)=> ReactNode) | string
    className?: string
    onOpenTab?: ()=>void
    children: ReactNode | string
}

const Tab : FC<TabProps> = (props) => {

    const {icon, onOpenTab, isActive, label, className} = props

    const classes = clsx(
        className,
        "tab-item",
        isActive && "tab-item-active"
    )

    return (
        <div>
            <div onClick={onOpenTab} className={classes}>
                {typeof label === "function" ? label(!!isActive) : label}
                {icon ? icon(!!isActive) : null}
                <div className={`item-bar ${isActive ? "active-bar": "" }`}></div>
            </div>
        </div>
    );
};

export default Tab;