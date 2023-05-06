import "./main-sidebar.scss"
import {
    AiOutlineForm,
    BiChevronDown,
    BiChevronUp, BsDatabase,

    FaBars, FaHome,
    FcInfo, HiOutlineDownload, IoImageSharp, RiQuillPenLine,
    SiVite,
    TbComponents
} from "react-icons/all";

import Collapse from "@app/components/Collapse/Collapse.tsx";
import {Link, useNavigate} from "react-router-dom";

const sidebarItems = [
    {
        to: "/",
        label: "Home",
        prefixIcon:  <FaHome fontSize={16} />,
    },
    {
        label: "Getting Start",
        prefixIcon:  <HiOutlineDownload fontSize={16} />,
        children: [
            { to: "/docs", label: "About RSL UI", icon:  <FcInfo fontSize={16} />},
            { to: "/docs/installation", label: "Installation"},
            { to: "/docs/installation", label: "Optimization"},
            { to: "/docs/installation", label: "Vite", icon:  <SiVite fontSize={14} />},
            { to: "/docs/installation", label: "Tutorial"},
        ]

    },    {
        label: "Content & Styles",
        prefixIcon:  <RiQuillPenLine fontSize={16} />,
        children: [
            { to: "/docs", label: "Colors"},
            { to: "/docs/installation", label: "CSS variables"},
            { to: "/docs/installation", label: "Divider"}
        ]

    },

    {
        label: "Navigation",
        prefixIcon:  <FaBars fontSize={12} />,
        children: [
            { to: "/docs/components/breadcrumb", label: "Breadcrumb"},
            { to: "/docs/components/footer", label: "Footer"},
            { to: "/docs/components/sidenav", label: "Sidenav"},
            { to: "/docs/navigation/navbar", label: "Navigation"},
            { to: "/docs/components/tabs", label: "Tabs"}
        ]
    },
    {
        label: "Components",
        prefixIcon:  <TbComponents fontSize={14} />,
        children: [
            { to: "/docs/components/buttons", label: "Buttons"},
            { to: "/docs/components/collapse", label: "Collapse"},
            { to: "/docs/components/tabs", label: "Tabs"},
            { to: "/docs/components/avatar", label: "Avatar"},
            { to: "/docs/components/modal", label: "Modal"},
            { to: "/docs/components/multi-modal", label: "Multi Modal"},
            { to: "/docs/components/calendar", label: "Calendar"}
        ]
    },

    {
        label: "Forms",
        prefixIcon:  <AiOutlineForm fontSize={14} />,
        children: [
            { to: "/docs/forms/overview", label: "Overview"},
            { to: "/docs/forms/input", label: "Input"},
            { to: "/docs/forms/input-group", label: "Input group"},
            { to: "/docs/forms/search-input", label: "Search Input"},
            { to: "/docs/components/checkbox", label: "File Picker"},
            { to: "/docs/components/checkbox", label: "Checkbox"},
            { to: "/docs/components/checkbox", label: "Switch"},
            { to: "/docs/components/checkbox", label: "Range"},
            { to: "/docs/components/checkbox", label: "Datepicker"},
            { to: "/docs/components/checkbox", label: "Timepicker"},
            { to: "/docs/components/search", label: "Search"},
            { to: "/docs/components/validation", label: "Validation"},
        ]
    },
    {
        label: "Data",
        prefixIcon:  <BsDatabase fontSize={14} />,
        children: [
            { to: "/docs/components/input", label: "Buttons"},
        ]
    },
    {
        label: "Templates",
        prefixIcon:  <IoImageSharp fontSize={14} />,
        children: [
            { to: "/docs/components/input", label: "Buttons"},
        ]
    }
]


const MainSidebar = () => {

    const navigate = useNavigate()

    function handleNavigate(item: {to?: string}){
        if(item.to){
            navigate(item.to)
        }
    }


    return (
        <div className="main-sidebar">


            <Collapse initialExpand={[1]}>
                {sidebarItems.map(item=>(
                    <Collapse.Item onClick={()=>handleNavigate({to: item.to})} className="text-dark-200 !mx-2 rounded-md" label={item.label} prefixIcon={item.prefixIcon} icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
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
    );
};

export default MainSidebar;