import React, {FC, HTMLAttributes, ReactElement, useState} from 'react';
import CollapseItem from "@app/components/Collapse/CollapseItem.tsx";

import "./collapse.scss"

interface Props extends HTMLAttributes<HTMLDivElement>{
    initialExpand: number[]
}


const Collapse:  FC<Props> = (props) => {


    const {children, initialExpand = []} = props

    const [activeItems, setActiveItems] = useState<number[]>(initialExpand)

    function handleToggle(index: number){
        if(activeItems.includes(index)){
            setActiveItems(activeItems.filter(idx=>idx !== index))
        } else {
            setActiveItems([...activeItems, index])
        }
    }

    return (
        <div>
            { children &&  Array.isArray(children)  && children.map((item: ReactElement, index: number)=>(
                <CollapseItem onToggle={()=>handleToggle(index)} isActive={activeItems.includes(index)} key={index} {...item.props}>

                </CollapseItem>
            ))}
        </div>
    );
};

Collapse.Item  = CollapseItem

export default Collapse;