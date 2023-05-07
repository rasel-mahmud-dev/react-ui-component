import React, { FC } from "react";
import {Column, Data, DateKey} from "./Table";

interface Props {
    columns: Column[];
    dataSource: Data[];
    tbodyClass?: { tr?: string; td?: string; tbody?: string };
}

const Tbody: FC<Props> = (props) => {
    const { dataSource, tbodyClass = {}, columns } = props;

    return (
        <tbody className={tbodyClass?.tbody}>
        {dataSource.map((data: Data, i: number) => (
            <tr className={tbodyClass?.tr} key={i}>
                {columns?.map((col: Column, i) => (
                    <td key={i + "-col"}
                        className={`table-cell ${
                            tbodyClass.td ? tbodyClass.td : ""
                        }`}
                        style={{ width: col.colWidth }}
                    >
                        {col.render
                            ? col.render(data[col.dataIndex as DateKey], data)
                            : data[col.dataIndex as DateKey]}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};

export default Tbody;