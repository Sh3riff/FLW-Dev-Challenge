import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { ApiGet, useLocalStorage  } from '../utils'
import { Loading, Error, Table, AddProduct, MerchantProducts } from '../components';
import { PageTemplate, InfoCard, Button } from '../styles/components';

//
import { storeDetail} from '../dummy'

const MerchantsStore = () => {
    let history = useHistory();
    const { user } = useAuth0()
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);    
    const { isLoading, error, data } = useQuery('userProfile', () =>ApiGet("users/getprofile", user, usersCountry))
    // const [ productView, SetProductView ] = useState(false)

    // const configT = {
    //     uniqueId: "Product Id", 
    //     isImage: ["Image"],
    // }


    if(isLoading) return( <Loading />)
    if(error) return( <Error />)

    return (
        <PageTemplate>
            {!data[0].isMerchant ?
                <>
                    <InfoCard>
                        <h2>You do not have a store, create one for $20</h2>
                        <Button onClick={ () => history.push('/createStore')}> Create Store</Button>
                    </InfoCard>
                </>
            :
                <div>
                    <InfoCard>
                        <p>Store Name: {data[0].storeName}</p>
                        <p>Store Id: {data[0].storeId}</p>
                        <p>Balance: {data[0].storeBalance}</p>
                        <p>Dispatch Rider: {data[0].dispatchRider}</p>
                        <p>Dispatch Rider Contact: {data[0].dispatchRiderContact}</p>
                        {/* <button onClick={ () => SetProductView(!productView) }>{!productView ? "VIEW PRODUCTS" : "VIEW SALES"}</button> */}
                    </InfoCard>
                    <MerchantProducts user={user} usersCountry={usersCountry}/>
                    {/* <div>
                        {!productView ?
                            <>
                                { 
                                    (storeDetail.salesHistory.length === 0) ?
                                    <InfoCard><h2>Your are yet to make sales.</h2></InfoCard>
                                    :
                                    <Table  tableHeader={storeDetail.HistoryTemplate} tableData={storeDetail.salesHistory} config={configT}/> 
                                }
                            </>
                        :
                            <MerchantProducts user={user} usersCountry={usersCountry}/>
                        }
                    </div> */}
                </div>
            }
        </PageTemplate>
    )
}

export default MerchantsStore
