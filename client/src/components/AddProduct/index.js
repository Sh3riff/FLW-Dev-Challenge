import React  from 'react';
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { uploadFile } from 'react-s3';
import { ApiGet, ApiPlus } from '../../utils'
import { Loading, Error } from '../';
import { FormContainer } from '../../styles/components';

const AddProduct = ( { user, usersCountry, toggler} ) => {
    const { isLoading, error, data:store } = useQuery('userProfile', () =>ApiGet("users/getprofile", user, usersCountry))
    const { register, handleSubmit, watch, errors } = useForm();
    const queryClient = useQueryClient();
    const addNewProduct = useMutation(productDetail => ApiPlus("post", 'products/add', productDetail, user, usersCountry),{
        onSuccess: data => queryClient.invalidateQueries('storeProduct')
    })
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)
    const config = {
        bucketName: 's3card',
        dirName: `ast/FLW/${store[0].storeId}`,
        region: 'us-east-1',
        accessKeyId: process.env.REACT_APP_AWS_ACCESS,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET
    }
    const onSubmit = async (e) => {
        const { name, id, price, qty, photo } = e
        try {
            const pixUpload = await uploadFile(photo[0], config);
            let newProduct ={
                name,
                id: `${store[0].storeId}-${id}`,
                price,
                qty,
                photo: pixUpload.location,
                storeSubAcct: store[0].subAccountId
            }
            addNewProduct.mutate(newProduct)
            toggler()
        } catch (error) {
            console.error("error", error)
        }
    };
    // const onSubmit = e => {
    //     const { name, id, price, qty, photo } = e
    //     uploadFile(photo[0], config)
    //         // .then(url => console.log("success",url.location))
    //         .then(url => {
    //             let newProduct ={
    //                 name,
    //                 id: `${store[0].storeId}-${id}`,
    //                 price,
    //                 qty,
    //                 photo: url.location,
    //                 storeSubAcct: store[0].subAccountId
    //             }
    //             addNewProduct.mutate(newProduct)
    //             toggler()
    //         })
    //         .catch(err => console.error("error", err))
    // };
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <legend><span className="number">1</span> Upload Product Image </legend>
                  <input type='file' name="photo" ref={register({ required: true })}/>          
            <legend><span className="number">2</span>Product Detail </legend>
                <label>Product Name:</label>
                <input type="text" name="name" placeholder="Product Name" ref={register({ required: true })} />
                <label>Product Id:</label>
                <input type="text" name="id" placeholder="Product Id" ref={register({ required: true} )} />
                <label>Price:</label>
                <input type="number" name="price" placeholder="Price" ref={register({ min: { value: 1, message: 'input valid price' }})} />
                <label>Quantity:</label>
                <input type="number" name="qty" placeholder="5" ref={register({ min: { value: 1, message: 'add 1 or more' }})} />
                <input type="submit" value="SUBMIT" />
        </FormContainer>
    )
}

export default AddProduct