import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { ApiGet, useLocalStorage  } from '../utils'
import { Loading, Error } from "../components";
import { PageTemplate, SimplePack } from '../styles/components';
import { Table } from '../components';

const H1 = styled.h1`
    color: ${props => props.theme.color.secondary}; 
`;

const OrderHistory = () => {
    const { user } = useAuth0()
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);    
    const { isLoading, error, data } = useQuery('userOrder', () =>ApiGet("transactions/getuser", user, usersCountry))
    const tableHeader = ["photo", "name", "id", "price", "date"]
    const config = { uniqueId: "Product Id", isImage: ["photo"],}
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)
    return (
        <PageTemplate >
                {
                    (data.length === 0) ?
                    <H1>You do not have an order history, purchase some items and check back</H1>
                    :
                    <SimplePack>
                        <h1>Order History</h1>
                        <Table  tableHeader={tableHeader} tableData={data} config={config}/>
                    </SimplePack>
                }
        </PageTemplate>
    )
}

export default OrderHistory
