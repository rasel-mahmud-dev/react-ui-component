import React, {FC, ReactNode} from 'react';
import clsx from "clsx";

export interface CollapseItemProps {
    icon?: (isActive: boolean)=>React.ReactNode
    prefixIcon?: React.ReactElement
    isActive?: boolean
    label: ((isActive: boolean)=> React.ReactNode) | string
    className?: string
    onToggle?: ()=>void,
    onClick?: ()=>void,
    children: ReactNode | string
}

const CollapseItem : FC<CollapseItemProps> = (props) => {

    const {icon, prefixIcon, onClick, onToggle, isActive, label, children, className} = props

    const classes = clsx(
        className,
        typeof label !== "function" && "collapse-item",
        !!isActive && "collapse-item-active"
    )

    function handleToggle(){
        if(children){
            onToggle && onToggle()
        }

        onClick && onClick()
    }

    return (
        <div>
            <div onClick={handleToggle} className={classes}>
                <div className="flex items-center gap-x-4">
                    {prefixIcon && prefixIcon}
                    {typeof label === "function" ? label(!!isActive) : label}
                </div>
                {children && ( icon ? icon(!!isActive) : null)}
            </div>

            {isActive && (
                 children
            )}

        </div>
    );
};

export default CollapseItem;