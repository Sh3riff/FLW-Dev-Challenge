import React, {useState} from 'react';
import { useQuery,  useMutation, useQueryClient } from 'react-query';
import { ApiGet, ApiPlus } from '../../utils'
import { Loading, Error, Table, AddProduct } from '../';
import { InfoCard, Button } from '../../styles/components';


const MerchantProducts = ({ user, usersCountry}) => {
    const queryClient = useQueryClient(); 
    const [ addProduct, SetAddProduct ] = useState(false)
    const { isLoading, error, data} = useQuery('userProduct', () =>ApiGet("products/getAll", user, usersCountry))
    const deleteProduct = useMutation(product => ApiPlus("delete", 'products/delete', product, user, usersCountry),{
        onSuccess: data => queryClient.invalidateQueries('userProduct')
    })
//
    const editFunc = val => console.log(val.id)
    const delFunc = val =>{
        const body = {"id": val.id}
        deleteProduct.mutate(body)
    }

    const productTableHeader = ["photo", "id", "name", "price",  "qty"]
    const configET = { uniqueId: "id", isImage: ["photo"], editWith: editFunc, delWith: delFunc }

    if(isLoading) return( <Loading />)
    if(error) return( <Error />)

    return (
            <>
                <Button margin="10px 0" onClick={ () => SetAddProduct(!addProduct) }>{!addProduct ? "ADD PRODUCT" : "PRODUCTS"}</Button>
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
                    : <AddProduct/>
                }
            </>
    )
                        
}

export default MerchantProducts
