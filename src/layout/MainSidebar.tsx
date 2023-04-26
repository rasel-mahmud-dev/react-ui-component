import React from 'react';
import "./main-sidebar.scss"
import {BiChevronDown, BiChevronUp, BiDownload, FcInfo, SiVite} from "react-icons/all";
import Button from "@app/components/MBD_Button/Button.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import {Link} from "react-router-dom";

const sidebarItems = [
    { to: "/", label: "Getting Start",

        children: [
            { to: "/docs/installation", label: "About RSL design", icon:  <FcInfo fontSize={16} />},
            { to: "/docs/installation", label: "Installation", icon:  <BiDownload fontSize={16} />},
            { to: "/docs/installation", label: "Vite", icon:  <SiVite fontSize={14} />},
            { to: "/docs/installation", label: "Tutorial", icon:  <BiDownload fontSize={16} />},
        ]

    },

    {
        label: "Components",
        icon:  <BiDownload fontSize={16} />,
        children: [
            { to: "/docs/buttons", label: "Buttons", icon:  <BiDownload fontSize={16} />},
            { to: "/docs/collapse", label: "Collapse", icon:  <BiDownload fontSize={16} />},
            { to: "/docs/tabs", label: "Tabs", icon:  <BiDownload fontSize={16} />}
        ]
    },
    { to: "/", label: "Getting Start", icon:  <BiDownload fontSize={16} />},
    { to: "/", label: "Getting Start", icon:  <BiDownload fontSize={16} />},
    { to: "/", label: "Getting Start", icon:  <BiDownload fontSize={16} />},
]

const MainSidebar = () => {
    return (
        <div className="main-sidebar">


            <Collapse initialExpand={[0, 1]}>
                {sidebarItems.map(item=>(
                    <Collapse.Item label={item.label} icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
                        { item.children  ?  (
                            <div className="text-sm">
                                {
                                    item.children.map(item2=>(
                                        <h5 className="flex items-center cursor-pointer text-gray-700 py-2 pl-8 hover:bg-blue-400">
                                            <span className="mr-1">{item2?.icon}</span>
                                            { item2.to
                                                ? <Link to={`${item2.to}`}>{item2.label}</Link>
                                                : item2.label }

                                        </h5>
                                    ))
                                }
                            </div>
                            ) : (
                                <Button className="flex items-center my-px" color="light" block={true}>
                                    {item.icon}
                                    <span className="ml-2">{item.label}</span>
                                </Button>
                            )}
                    </Collapse.Item>
                ))}
            </Collapse>

        </div>
    );
};

export default MainSidebar;