

import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout, {OverviewContent} from "@app/pages/docs/DocsPageLayout.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import {BiChevronDown, BiChevronUp} from "react-icons/all";
import {BiCode, BiHeart} from "react-icons/bi";
import {ReactNode} from "react";
import MdbButton from "@app/components/MBD_Button/Button.tsx";
import CodeView from "@app/components/CodeView/CodeView.tsx";

const overviewContent: OverviewContent[] = []

interface CategoryType{
    label: string,
    icon?: ReactNode,
    children?: CategoryType[]
}

const categories: CategoryType[] =  [
    {
        label: "Electronics",
        icon: <BiHeart />,
        children: [
            {
                label: "Computer and Accessories",
                icon: <BiHeart />,
                children: [
                    {
                        label: "Computers And Desktop",
                        icon: <BiHeart />,
                        children: [
                            { label: "Motherboard" },
                            { label: "Processor" },
                            { label: "Ram" },
                            { label: "SSD" },
                            { label: "Power Supply" },
                        ]
                    },
                    {
                        label: "Laptop And accessories",
                        icon: <BiHeart />,
                        children: [
                            { label: "Laptop" },
                            { label: "Laptop Battery" },
                            { label: "Laptop Charger" },
                            { label: "Laptop Cooler" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Clothes",
        icon: <BiHeart />,
        children: [
            {
                label: "Mens Clothes",
                icon: <BiHeart />,
            },
            {
                label: "Women Clothes",
                icon: <BiHeart />,
            },
            {
                label: "Baby Clothes",
                icon: <BiHeart />,
            }
        ]
    },
]

function RenderRecur({item}: { item: CategoryType }){

    return (
        <div className="pl-8">
            { item.children && (
                <Collapse initialExpand={[]}>
                    {item.children.map((item2: CategoryType)=>(
                        <Collapse.Item
                            label={item2.label}
                            icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
                                <RenderRecur item={item2} />
                        </Collapse.Item>
                    ))}
                </Collapse>
            )}
        </div>
    )
}

const CollapsePage = () => {
    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Collapse" overviewContent={overviewContent} activeHash={activeHash} location={location}>

        <div className="">
                <h4 className="mt-8 mb-2"></h4>

            <section id="default-button">
                <h4 className="pb-4 mt-4">Collapse able nested menu items</h4>

                <Collapse initialExpand={[]}>
                    {categories.map((item)=>(
                        <Collapse.Item label={item.label} icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
                            <RenderRecur item={item} />
                        </Collapse.Item>
                    ))}
                </Collapse>



                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[0]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView className="overflow-x-auto" lang="typescript" code={`
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout, {OverviewContent} from "@app/pages/docs/DocsPageLayout.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import {BiChevronDown, BiChevronUp} from "react-icons/all";
import {BiCode, BiHeart} from "react-icons/bi";
import {ReactNode} from "react";


interface CategoryType{
    label: string,
    icon?: ReactNode,
    children?: CategoryType[]
}

const categories: CategoryType[] =  [
    {
        label: "Electronics",
        icon: <BiHeart />,
        children: [
            {
                label: "Computer and Accessories",
                icon: <BiHeart />,
                children: [
                    {
                        label: "Computers And Desktop",
                        icon: <BiHeart />,
                        children: [
                            { label: "Motherboard" },
                            { label: "Processor" },
                            { label: "Ram" },
                            { label: "SSD" },
                            { label: "Power Supply" },
                        ]
                    },
                    {
                        label: "Laptop And accessories",
                        icon: <BiHeart />,
                        children: [
                            { label: "Laptop" },
                            { label: "Laptop Battery" },
                            { label: "Laptop Charger" },
                            { label: "Laptop Cooler" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Clothes",
        icon: <BiHeart />,
        children: [
            {
                label: "Mens Clothes",
                icon: <BiHeart />,
            },
            {
                label: "Women Clothes",
                icon: <BiHeart />,
            },
            {
                label: "Baby Clothes",
                icon: <BiHeart />,
            }
        ]
    },
]

function RenderRecur({item}: { item: CategoryType }){

    return (
        <div className="pl-8">
            { item.children ? (
                <Collapse initialExpand={[]}>
                    {item.children.map((item2: CategoryType)=>(
                        <Collapse.Item
                            label={item2.label}
                            icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
                                <RenderRecur item={item2} />
                        </Collapse.Item>
                    ))}
                </Collapse>
            ) : (
                <div>Content</div>
            ) }
        </div>
    )
}

const CollapsePage = () => {

    return (
        <div>
            <h4 className="pb-4 mt-4">Collapse able nested menu items</h4>

            <Collapse initialExpand={[]}>
                {categories.map((item)=>(
                    <Collapse.Item label={item.label} icon={(isActive: boolean)=> !isActive ? <BiChevronDown /> : <BiChevronUp /> }>
                        <RenderRecur item={item} />
                    </Collapse.Item>
                ))}
            </Collapse>
            </div>
    );
};

export default CollapsePage;

`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>



            </section>




            </div>
        </DocsPageLayout>
    );
};

export default CollapsePage;