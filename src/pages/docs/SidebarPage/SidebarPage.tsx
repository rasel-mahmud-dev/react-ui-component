import React from 'react';
import {
    AiOutlineForm,
    BsDatabase,
    FaBars,
    FaHome,
    FcInfo,
    HiOutlineDownload,
    IoImageSharp,
    RiQuillPenLine,
    SiVite,
    TbComponents
} from "react-icons/all";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import Avatar from "@app/components/Avatar/Avatar.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import MdbButton from "@app/components/MBD_Button/Button.tsx";
import {BiCode} from "react-icons/bi";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Sidebar from "@app/components/Sidebar/Sidebar.tsx";

const SidebarPage = () => {


    const sidebarItems = [
        {
            to: "/",
            label: "Home",
            prefixIcon: <FaHome fontSize={16}/>,
        },
        {
            label: "Getting Start",
            prefixIcon: <HiOutlineDownload fontSize={16}/>,
            children: [
                {to: "/docs", label: "About RSL UI", icon: <FcInfo fontSize={16}/>},
                {to: "/docs/installation", label: "Installation"},
                {to: "/docs/installation", label: "Optimization"},
                {to: "/docs/installation", label: "Vite", icon: <SiVite fontSize={14}/>},
                {to: "/docs/installation", label: "Tutorial"},
            ]

        }, {
            label: "Content & Styles",
            prefixIcon: <RiQuillPenLine fontSize={16}/>,
            children: [
                {to: "/docs", label: "Colors"},
                {to: "/docs/installation", label: "CSS variables"},
                {to: "/docs/installation", label: "Divider"}
            ]

        },

        {
            label: "Navigation",
            prefixIcon: <FaBars fontSize={12}/>,
            children: [
                {to: "/docs/components/breadcrumb", label: "Breadcrumb"},
                {to: "/docs/components/footer", label: "Footer"},
                {to: "/docs/components/sidenav", label: "Sidenav"},
                {to: "/docs/navigation/navbar", label: "Navigation"},
                {to: "/docs/components/tabs", label: "Tabs"}
            ]
        },
        {
            label: "Components",
            prefixIcon: <TbComponents fontSize={14}/>,
            children: [
                {to: "/docs/components/buttons", label: "Buttons"},
                {to: "/docs/components/collapse", label: "Collapse"},
                {to: "/docs/components/tabs", label: "Tabs"},
                {to: "/docs/components/avatar", label: "Avatar"},
                {to: "/docs/components/modal", label: "Modal"},
                {to: "/docs/components/multi-modal", label: "Multi Modal"},
                {to: "/docs/components/calendar", label: "Calendar"}
            ]
        },

        {
            label: "Forms",
            prefixIcon: <AiOutlineForm fontSize={14}/>,
            children: [
                {to: "/docs/forms/overview", label: "Overview"},
                {to: "/docs/forms/input", label: "Input"},
                {to: "/docs/forms/input-group", label: "Input group"},
                {to: "/docs/forms/search-input", label: "Search Input"},
                {to: "/docs/components/checkbox", label: "File Picker"},
                {to: "/docs/components/checkbox", label: "Checkbox"},
                {to: "/docs/components/checkbox", label: "Switch"},
                {to: "/docs/components/checkbox", label: "Range"},
                {to: "/docs/components/checkbox", label: "Datepicker"},
                {to: "/docs/components/checkbox", label: "Timepicker"},
                {to: "/docs/components/search", label: "Search"},
                {to: "/docs/components/validation", label: "Validation"},
            ]
        },
        {
            label: "Data",
            prefixIcon: <BsDatabase fontSize={14}/>,
            children: [
                {to: "/docs/components/input", label: "Buttons"},
            ]
        },
        {
            label: "Templates",
            prefixIcon: <IoImageSharp fontSize={14}/>,
            children: [
                {to: "/docs/components/input", label: "Buttons"},
            ]
        }
    ]


    const {activeHash, location} = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Sidebar" overviewContent={overviewContent} activeHash={activeHash}
                        location={location}>


            <section id="avatar">
                <h4 className="pb-4 mt-4">Avatar</h4>
                <div className="">
                    <Sidebar items={sidebarItems} />
                </div>
                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[]}>
                        <Collapse.Item label={(isOpen: boolean) => (
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18}/>
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView lang="jsx" code={`
                            
                            
                            
                            
                            `}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>

            </section>
        </DocsPageLayout>
    );
};

export default SidebarPage;