import {FC, HTMLAttributes, ReactElement, useState} from 'react';
import CollapseItem, {CollapseItemProps} from "@app/components/Collapse/CollapseItem.tsx";

import "./collapse.scss"


interface Props {
    initialExpand: number[]
    children: ReactElement | ReactElement[]
}


interface CustomFC<T> extends HTMLAttributes<HTMLDivElement>, FC<T>{
    Item: FC<CollapseItemProps>
}


const Collapse:  CustomFC<Props> = (props) => {


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
            { (
                children &&  Array.isArray(children)) ? children.map((item: ReactElement, index: number)=>(
                    <CollapseItem onToggle={()=>handleToggle(index)} isActive={activeItems.includes(index)} key={index} {...item.props}></CollapseItem>

            )) : children && typeof children === "object" && (
                <CollapseItem onToggle={()=>handleToggle(0)} isActive={activeItems.includes(0)} key={0} {...children.props}>

                </CollapseItem>
            ) }
        </div>
    );
};

Collapse.Item  = CollapseItem

export default Collapse;