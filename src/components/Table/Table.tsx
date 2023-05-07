import React, {FC, HTMLAttributes, useEffect, useState} from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

import "./table.scss";

export interface Column extends HTMLAttributes<HTMLElement> {
    id?: string;
    title: string;
    dataIndex?: string;
    className?: string;
    colWidth?: number;
    sorter?: (args1: any, args2: any) => any;
    render?: (value: any, data: any) => React.ReactNode;
}


interface Data extends Pick<Column, "title">, Pick<Column, "id">{

}



interface TableProps extends HTMLAttributes<HTMLTableElement> {
    dataSource: Data[];
    theadClass?: { th?: string; tr?: string; thead?: string };
    tbodyClass?: { tr?: string; td?: string; tbody?: string };
    columns: Column[];
    scroll?: { x?: number; y?: number };
    fixed?: boolean
}

interface State{
    items: Data[],
    order: number,
    sortedField?: string
}

const Table: FC<TableProps> = (props) => {
    const {theadClass, tbodyClass, className, dataSource, columns, fixed, scroll, pagination} = props;

    const fixedTable = {maxHeight: fixed ? 500 : "auto", minWidth: 0};

    const [state, setState] = useState<State>({
        items: [],
        order: 1,
        sortedField: "",
    });

    function initialDataSetup() {
        setState((prevState) => ({
            ...prevState,
            items: dataSource,
            order: 1
        }));
    }


    useEffect(() => {
        initialDataSetup();
    }, [dataSource]);


    if (scroll && scroll.y) {
        fixedTable.maxHeight = scroll.y;
    }
    if (scroll && scroll.x) {
        fixedTable.minWidth = scroll.x;
    }

    function handleSort(compareFn: (args1: any, args2: any) => void, column: any) {
        if (!compareFn) return;

        let list: any = state.items;
        if (state.order) {

            list = list.sort((a: any, b: any) => compareFn(a[column.dataIndex], b[column.dataIndex]));
        } else {
            list = list.sort((a: any, b: any) => compareFn(b[column.dataIndex], a[column.dataIndex]));
        }

        setState((prevState) => ({
            ...prevState,
            items: list,
            sortedField: column.dataIndex,
            order: prevState.order ? 0 : 1,
        }));
    }


    return (
        <div>
            <div
                className={`rsl-table ${fixed ? "table-fixed" : ""}`}
                style={fixedTable.maxHeight ? {maxHeight: fixedTable.maxHeight} : {}}
            >
                <table className={className} style={fixedTable.minWidth ? {minWidth: fixedTable.minWidth} : {}}>
                    <Thead
                        onSort={handleSort}
                        theadClass={theadClass}
                        columns={columns}
                        sortedField={state.sortedField}
                        order={state.order}
                    />
                    <Tbody
                        tbodyClass={tbodyClass}
                        dataSource={state.items}
                        columns={columns}
                    />
                </table>
            </div>

        </div>
    );
};

export default Table;