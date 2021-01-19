import React, {useState} from 'react';
import { useQuery } from 'react-query';
import { ApiGet } from '../../utils'
import { Loading, Error, Table, AddProduct } from '../';
import { InfoCard, Button } from '../../styles/components';


const MerchantProducts = ({ user, usersCountry}) => {
    const [ addProduct, SetAddProduct ] = useState(false)
    const { isLoading, error, data} = useQuery('storeProduct', () =>ApiGet("products/storeproduct", user, usersCountry))
    
    const toggleAddProduct = () => SetAddProduct(!addProduct)
    const editFunc = val => console.log(val.id)
    const delFunc = val =>{
        console.log(val.id)
    }

    const productTableHeader = ["photo", "id", "name", "price",  "qty"]
    const configET = { uniqueId: "id", isImage: ["photo"], editWith: editFunc, delWith: delFunc }

    if(isLoading) return( <Loading />)
    if(error) return( <Error />)

    return (
            <>
                <Button margin="10px 0" onClick={ () => toggleAddProduct() }>{!addProduct ? "ADD PRODUCT" : "PRODUCTS"}</Button>
                {
                    !addProduct ?
                    <>
                    { 
                        (data.length === 0) ?
                        <InfoCard><h2>Your store is empty, add products now.</h2></InfoCard>
                        :
                        <Table  tableHeader={productTableHeader} tableData={data} config={configET} /> 
                    }
                    </>
                    : <AddProduct  user={user} usersCountry={usersCountry} toggler={toggleAddProduct}/>
                }
            </>
    )
                        
}

export default MerchantProducts
