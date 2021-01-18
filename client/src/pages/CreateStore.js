import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { ApiGet, ApiPlus, useLocalStorage  } from '../utils'
import { CreateStorePayment, Loading, Error} from '../components';
import { PageTemplate, FormContainer, ErrMsg  } from '../styles/components';



const CreateStore = () => {
    const { user } = useAuth0()
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);
    const [shouldPay, setShouldPay] = useState({
        value: false,
        data: null
    })
    
    const { register, handleSubmit, errors } = useForm();
    const submitForm = e => {
        setShouldPay({...shouldPay, value: true, data:e})
    };
    const { isLoading, error, data } = useQuery('storeFront', () =>ApiGet("users/getprofile", user, usersCountry))
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)
    if(data[0].isMerchant) return  <Redirect to="/mystore" />;
    return (
        <PageTemplate>
            {!shouldPay.value ?
            <FormContainer onSubmit={handleSubmit(submitForm)}>
                <legend><span class="number">1</span> STORE REGISTRATION</legend>
                    <label>FirstName:
                        <input type="text" name="firstName" placeholder="First Name" defaultValue={data[0].firstName} ref={register({ required: true })} />
                        {errors.firstName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>LastName:
                        <input type="text" name="lastName" placeholder="Last Name" defaultValue={data[0].lastName} ref={register({ required: true} )} />
                        {errors.lastName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>Store Name:
                        <input type="text" name="storeName" placeholder="storeName" defaultValue={data[0].storeName} ref={register({ required: true} )} />
                        {errors.storeName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>Account Number:
                        <input type="text" name="accountNumber" placeholder="Account Number"  ref={register({ required: true} )} />
                        {errors.storeName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>Bank Name:
                        <input type="text" name="bankName" placeholder="Bank Name"  ref={register({ required: true} )} />
                        {errors.storeName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>Phone:
                        <input type="phone" name="phone" placeholder="Phone Number" defaultValue={data[0].phone} ref={register({ required: true })} />
                        {errors.phone && <ErrMsg>This field is required</ErrMsg>}
                    </label>                        
                    <label>Address:
                        <textarea name="address" placeholder="Enter Full Address" defaultValue={data[0].address} ref={register({ required: true })}></textarea>
                        {errors.address && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                        <input type="submit" value="Pay $20" />
            </FormContainer>
            :
            <CreateStorePayment passProps={ {user, usersCountry, info:shouldPay.data} }/>
            }
        </PageTemplate>
    )
}

export default CreateStore
