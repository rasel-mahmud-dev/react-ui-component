import React, {FC, ReactElement} from 'react';
import clsx from "clsx";
interface Props {
    icon?: (isActive: boolean)=>React.ReactNode
    isActive?: boolean
    label: string
    className?: string
    onToggle: ()=>void,
    children: ReactElement | string
}

const CollapseItem : FC<Props> = (props) => {

    const {icon, onToggle, isActive, label, children, className} = props

    const classes = clsx(
        className,
        "collapse-item"
    )

    return (
        <div>
            <div onClick={onToggle} className={classes}>
                {label}
                {icon ? icon(!!isActive) : null}
            </div>
            {isActive && (
                 children
            )}

        </div>
    );
};

export default CollapseItem;