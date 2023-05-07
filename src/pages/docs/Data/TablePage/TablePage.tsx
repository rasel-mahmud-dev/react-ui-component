import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Table, {Column} from "@app/components/Table/Table.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import MdbButton from "@app/components/MBD_Button/Button.tsx";
import {BiCode, BiPen, BiTrash, BiTrashAlt} from "react-icons/bi";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import React from "react";
import ApiSection from "@app/components/ApiSection/ApiSection.tsx";

const overviewContent = [
    {label: "Default Table", hash: "#default-table"},
    {label: "Fixed Header Table", hash: "#fixed-header-table"},
    {label: "Table API", hash: "#api"}
]

const TablePage = () => {
    const {activeHash, location} = useGetActiveHash()


    function handleDeleteItem(itemId: string) {
        alert("Handle Delete item ID:" + itemId)
    }

    function handleEditItem(itemId: string) {
        alert("Handle Edit item ID:" + itemId)
    }

    const columns: Column[] = [
        {
            id: "2",
            title: "Id",
            dataIndex: "id",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0,
            render: (id: number)=> "#" + id
        },
        {
            id: "2",
            title: "Thumb",
            dataIndex: "thumb",
            render: (img: string)=>(
                <div className="w-10">
                    <img src={img} alt=""/>
                </div>
            )
        },
        {
            id: "2",
            title: "Title",
            dataIndex: "title",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0
        },

        {
            id: "3",
            title: "Price",
            dataIndex: "price",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0,
            render: (price: number)=> "Tk " + price
        },
        {
            id: "4",
            title: "Actions",
            dataIndex: "",
            render: (_: unknown, item: {title: string, id: string})=> (
                <div className="flex items-center gap-x-2">
                    <MdbButton onClick={()=>handleEditItem(item.id)} className="flex items-center gap-x-1">
                        <BiPen fontSize={18}/>
                        <span>Edit</span>
                    </MdbButton>

                    <MdbButton onClick={()=>handleDeleteItem(item.id)} color="danger" className="flex items-center gap-x-1">
                            <BiTrashAlt fontSize={18}/>
                            <span>Delete</span>
                        </MdbButton>
                </div>
            )
        },
    ]

    const data = new Array(10).fill(0).map((_, index)=>({
        id: (index + 1).toString(),
        title: `Apple Iphone ${index + 1} plus`,
        dataIndex: index + 1,
        thumb: "/images/6861C-1_carousel.webp",
        price: (10 * index)
    }))




    return (
        <DocsPageLayout pageTitle="Table" overviewContent={overviewContent} activeHash={activeHash} location={location}>
            <section id="default-table">
                <h4 className="mt-8 mb-2">Normal Table</h4>
                <div>
                    <Table
                        theadClass={{ tr: "bg-dark-10/50 ", th: "!px-1 mb-4"}}
                        tbodyClass={{tr: "hover:bg-dark-10/50", td: "p-1"}}
                        dataSource={data}
                        columns={columns}
                    />

                </div>

                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[0]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView lang="jsx"  code={`


import React from "react";
import Table, {Column} from "@app/components/Table/Table.tsx";


const TablePage = () => {

    const columns: Column[] = [
        {
            id: "2",
            title: "Id",
            dataIndex: "id",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0,
            render: (id: number)=> "#" + id
        },
        {
            id: "2",
            title: "Thumb",
            dataIndex: "thumb",
            render: (img: string)=>(
                <div className="w-10">
                    <img src={img} alt=""/>
                </div>
            )
        },
        {
            id: "2",
            title: "Title",
            dataIndex: "title",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0
        },

        {
            id: "3",
            title: "Price",
            dataIndex: "price",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0,
            render: (price: number)=> "Tk " + price
        },
    ]

    const data = new Array(10).fill(0).map((_, index)=>({
        id: (index + 1).toString(),
        title: \`Apple Iphone {index + 1} plus\`,
        dataIndex: index + 1,
        thumb: "/images/6861C-1_carousel.webp",
        price: (10 * index)
    }))


return (
    <div>
        <Table
            theadClass={{ tr: "bg-dark-10/50 ", th: "!px-1 mb-4"}}
            tbodyClass={{tr: "hover:bg-dark-10/50", td: "p-1"}}
            dataSource={data}
            columns={columns}
        />
    </div>
   )
}

               
`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>


            </section>

            <section id="fixed-header-table">
                <h4 className="mt-8 mb-2">Fixed Header Table</h4>
                <div>
                    <Table
                        fixed={true}
                        scroll={{y: 400}}
                        theadClass={{ tr: "!bg-primary-10 ", th: "!px-1 mb-4"}}
                        tbodyClass={{tr: "hover:bg-dark-10/50", td: "p-1"}}
                        dataSource={[...data]}
                        columns={[...columns]}
                    />

                </div>

                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView lang="jsx"  code={`


import React from "react";
import Table, {Column} from "@app/components/Table/Table.tsx";

const TablePage = () => {
    const {activeHash, location} = useGetActiveHash()


    const columns: Column[] = [
        {
            id: "2",
            title: "Id",
            dataIndex: "id",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0,
            render: (id: number)=> "#" + id
        },
        {
            id: "2",
            title: "Thumb",
            dataIndex: "thumb",
            render: (img: string)=>(
                <div className="w-10">
                    <img src={img} alt=""/>
                </div>
            )
        },
        {
            id: "2",
            title: "Title",
            dataIndex: "title",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0
        },

        {
            id: "3",
            title: "Price",
            dataIndex: "price",
            sorter: (args1, args2)=>args1 > args2 ? 1 : args1 < args2 ? -1 : 0,
            render: (price: number)=> "Tk " + price
        },
    ]

    const data = new Array(10).fill(0).map((_, index)=>({
        id: (index + 1).toString(),
        title: \`Apple Iphone {index + 1} plus\`,
        dataIndex: index + 1,
        thumb: "/images/6861C-1_carousel.webp",
        price: (10 * index)
    }))


return (
    <div>
         <Table
            fixed={true}
            scroll={{y: 400}}
            theadClass={{ tr: "!bg-primary-10 ", th: "!px-1 mb-4"}}
            tbodyClass={{tr: "hover:bg-dark-10/50", td: "p-1"}}
            dataSource={[...data]}
            columns={[...columns]}
        />
    </div>
   )
}

               
`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>

            </section>


            <ApiSection>

            </ApiSection>



        </DocsPageLayout>
    );
};

export default TablePage;