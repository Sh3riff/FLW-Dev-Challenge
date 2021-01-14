import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { TableContainer } from './TableStyle';

/// Docs
// const config = {
//     uniqueId: "", // item dt has a uniqueId
//     isImage: [], // item dt is an object
//     editWith: "func", // function to edit
//     delWith: "func",  // function to delete
// }

const Table = ({ tableHeader, tableData, config }) => {
    const { uniqueId, isImage, editWith, delWith } = config;
    return (
        <TableContainer>
                <thead>
                    <tr>
                        {
                            tableHeader.map(header => <th>{header}</th>)
                        }
                        { editWith && <th>Edit</th> }
                        { delWith && <th>Delete</th> }
                    </tr>
                </thead>
                <tbody>
                        {
                            tableData.map(data =>
                                (
                                <tr key={data[uniqueId]}>
                                    {
                                        tableHeader.map(item =>
                                            (isImage.includes(item)) ?
                                            <td><img src={data[item]}  /></td> :
                                            <td>{data[item]}</td>
                                        )
                                    }
                                    { editWith && <td onClick={() => editWith(data)}><MdEdit/></td> }
                                    { delWith &&  <td onClick={() => delWith(data)}><MdDelete/></td> }
                                </tr>

                                )
                            )
                        }
                </tbody>
            </TableContainer>
    )
}

export default Table