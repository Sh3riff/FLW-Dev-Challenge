import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../styles/components';
import { Table } from '../components';

//
import { tableData, tableHeader} from '../dummy';

const H1 = styled.h1`
    color: ${props => props.theme.color.secondary}; 
`;

const OrderHistory = () => {
    const config = {
        uniqueId: "Product Id", 
        isImage: ["Image"],
    }
    return (
        <PageTemplate >
                {
                    (tableData.length === 0) ?
                    <H1>You do not have an order history, purchase some items and check back</H1>
                    :
                    <Table  tableHeader={tableHeader} tableData={tableData} config={config}/>
                }
        </PageTemplate>
    )
}

export default OrderHistory
