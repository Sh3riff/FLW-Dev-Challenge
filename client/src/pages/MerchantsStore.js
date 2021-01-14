import React, {useState} from 'react';
import { Table, AddProduct } from '../components';
import { PageTemplate, InfoCard, Button } from '../styles/components';

//
import { storeDetail, ProductTemplate, ProductDetail } from '../dummy'
const userAsStore = true;


const MerchantsStore = () => {
    const [ productView, SetProductView ] = useState(false)
    const [ addProduct, SetAddProduct ] = useState(false)

    const editFunc = val => console.log(val)
    const delFunc = val => console.log(val)

    const configT = {
        uniqueId: "Product Id", 
        isImage: ["Image"],
    }

    const configET = {
        uniqueId: "Product Id", 
        isImage: ["Image"],
        editWith: editFunc,
        delWith: delFunc,
    }

    return (
        <PageTemplate flexJus="flex-start">
            {!userAsStore ?
                <>
                    <InfoCard>
                        <h2>You do not have a store, create one for $20</h2>
                        <button> Create Store</button>
                    </InfoCard>
                </>
            :
                <div>
                    <InfoCard>
                        <p>Store Name: {storeDetail.storeName}</p>
                        <p>Store Id: {storeDetail.storeId}</p>
                        <p>Balance: {storeDetail.balance}</p>
                        <p>Dispatch Rider: {storeDetail.dispatchRider.name}</p>
                        <p>Dispatch Rider Contact: {storeDetail.dispatchRider.contact}</p>
                        <button onClick={ () => SetProductView(!productView) }>{!productView ? "VIEW PRODUCTS" : "VIEW SALES"}</button>
                    </InfoCard>
                    <div>
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
                            <>
                                <Button margin="10px 0" onClick={ () => SetAddProduct(!addProduct) }>{!addProduct ? "ADD PRODUCT" : "PRODUCTS"}</Button>
                                {
                                    !addProduct ?
                                    <>
                                    { 
                                        (ProductDetail.Products.length === 0) ?
                                        <InfoCard><h2>Your store is empty, add products now.</h2></InfoCard>
                                        :
                                        <Table  tableHeader={ProductDetail.Template} tableData={ProductDetail.Products} config={configET} /> 
                                    }
                                    </>
                                    : <AddProduct/>
                                }
                            </>
                        }
                    </div>
                </div>
            }
        </PageTemplate>
    )
}

export default MerchantsStore
