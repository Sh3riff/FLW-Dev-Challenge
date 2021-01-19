import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { ApiGet, useLocalStorage  } from '../utils'
import { Loading, Error, Table, AddProduct, MerchantProducts } from '../components';
import { PageTemplate, InfoCard, Button, SimplePack } from '../styles/components';

//
import { storeDetail} from '../dummy'


const MerchantsStore = () => {
    let history = useHistory();
    const { user } = useAuth0()
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);
    
    const { isLoading:profileLoading, error:profileError, data:profileData } = useQuery('userProfile', () =>ApiGet("users/getprofile", user, usersCountry))
    const { isLoading:storeLoading, error:storeError, data:storeData } = useQuery('storeOrder', () =>ApiGet("transactions/getstore", user, usersCountry))
    const [ productView, SetProductView ] = useState(false)

    const config = { uniqueId: "id", isImage: ["photo"] }
    const tableHeader = ["photo", "name", "income", "price", "date"]

    const isLoading = profileLoading || storeLoading
    const error = profileError || storeError
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)
    return (
        <PageTemplate>
            {!profileData[0].isMerchant ?
                <>
                    <InfoCard>
                        <h2>You do not have a store, create one for $20</h2>
                        <Button onClick={ () => history.push('/createStore')}> Create Store</Button>
                    </InfoCard>
                </>
            :
                <div>
                    <InfoCard>
                        <p>Store Name: {profileData[0].storeName}</p>
                        <p>Store Id: {profileData[0].storeId}</p>
                        <p>Dispatch Rider: {profileData[0].dispatchRider}</p>
                        <p>Dispatch Rider Contact: {profileData[0].dispatchRiderContact}</p>
                        <button onClick={ () => SetProductView(!productView) }>{!productView ? "VIEW PRODUCTS" : "VIEW SALES"}</button>
                    </InfoCard>
                    <div>
                        {!productView ?
                            <>
                                { 
                                    (storeDetail.salesHistory.length === 0) ?
                                    <InfoCard><h2>Your are yet to make sales.</h2></InfoCard>
                                    :
                                    <SimplePack>
                                        <h1>Sales History</h1>
                                        <Table  tableHeader={tableHeader} tableData={storeData} config={config}/>
                                    </SimplePack> 
                                }
                            </>
                        :
                            <SimplePack>
                                <h1>Store Products</h1>
                                <MerchantProducts user={user} usersCountry={usersCountry}/>
                            </SimplePack>
                        }
                    </div>
                </div>
            }
        </PageTemplate>
    )
}

export default MerchantsStore
