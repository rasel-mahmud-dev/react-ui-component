import React, {FC} from 'react';
import Collapse from "@app/components/Collapse/Collapse.tsx";
import {BiChevronDown, BiChevronUp} from "react-icons/all";
import {Link} from "react-router-dom";


export interface SidebarItem{
    to?: string,
    label: string,
    prefixIcon?:  React.ReactElement | any,
    icon?: (isActive: boolean)=>React.ReactElement,
    children?: SidebarItem[]

}


interface Props{
    items: SidebarItem[]
    className?: string
    onClick?: (item: SidebarItem)=>void
}

const Sidebar: FC<Props> = (props) => {

    const {items, className = "", onClick} = props

    return (
        <div>
            <div className={className}>

                <Collapse initialExpand={[1]}>
                    {items.map(item=>(
                        <Collapse.Item onClick={()=>onClick && onClick( item)} className="text-dark-200 !mx-2 rounded-md" label={item.label} prefixIcon={item.prefixIcon} icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
                            { item.children  &&  (
                                <div className="text-sm">
                                    {
                                        item.children.map(item2=>(
                                            item2.to
                                                ? (
                                                    <Link to={`${item2.to}`}>
                                                        <h5 className="collapse-item-h5 mx-2 rounded-md text-dark-200">
                                                            {item2.label}
                                                        </h5>
                                                    </Link>

                                                )
                                                :  <h5 className="collapse-item-h5 mx-2 rounded-md text-dark-300">{item2.label }</h5>
                                        ))
                                    }
                                </div>
                            )}
                        </Collapse.Item>
                    ))}
                </Collapse>

            </div>
        </div>
    );
};

export default Sidebar;