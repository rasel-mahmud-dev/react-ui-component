import React, {FC, HTMLAttributes, ReactElement, useState} from 'react';
import Tab, {TabProps} from "@app/components/Tabs/Tab";

import './tabs.scss'

interface Props extends HTMLAttributes<HTMLDivElement>{
    initialOpen?: number
}

interface CustomFC<T> extends FC<T>{
    Tab: FC<TabProps>
    className?: string
}

const Tabs: CustomFC<Props> = (props) => {


    const {children, className = "", initialOpen = 0} = props

    const [openTab, setOpenTab] = useState<number>(initialOpen)

    function handleOpenTab(index: number){
        setOpenTab(index)
    }

    console.log(openTab)


    return (
        <div className={`tabs ${className}`}>

            <div className="tabs-header">
                { children &&  Array.isArray(children)  && children.map((item: ReactElement, index: number)=>(
                    <Tab onOpenTab={()=>handleOpenTab(index)} isActive={openTab === index} key={index} {...item.props}></Tab>
                ))}
            </div>

            <div className="tab-content">
                { children &&  Array.isArray(children)  && children[openTab].props.children }
            </div>
        </div>
    );
};

Tabs.Tab = Tab

export default Tabs;