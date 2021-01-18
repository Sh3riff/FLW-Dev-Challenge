import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from "react-hook-form";
import { ApiPlus } from '../../utils'
import { Loading, Error, CloseIcon } from "../";
import {FormContainer, ErrMsg } from '../../styles/components';

const UpdateProfile = ({ passThisProps }) => {
    const { data, user, usersCountry, toggleEdit} = passThisProps
    const queryClient = useQueryClient(); 
    
    const { register, handleSubmit, errors } = useForm();
    const submitForm = e => {
        updateProfile.mutate(e)
        toggleEdit()
    };
    const updateProfile = useMutation(updatedValue => ApiPlus("put", 'users/update', updatedValue, user, usersCountry),{
        onSuccess: data => queryClient.invalidateQueries('userProfile') 
    })
    if(updateProfile.isLoading) return( <Loading />)
    if(updateProfile.error) return( <Error />)
    return (
            <FormContainer onSubmit={handleSubmit(submitForm)}>
                < CloseIcon closeHandler={ toggleEdit }/>
                <legend><span class="number">1</span> User Info</legend>
                    <label>FirstName:
                        <input type="text" name="firstName" placeholder="First Name" defaultValue={data[0].firstName} ref={register({ required: true })} />
                        {errors.firstName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>LastName:
                        <input type="text" name="lastName" placeholder="Last Name" defaultValue={data[0].lastName} ref={register({ required: true} )} />
                        {errors.lastName && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                    <label>Phone:
                        <input type="phone" name="phone" placeholder="Phone Number" defaultValue={data[0].phone} ref={register({ required: true })} />
                        {errors.phone && <ErrMsg>This field is required</ErrMsg>}
                    </label>                        
                    <label>Address:
                        <textarea name="address" placeholder="Enter Full Address" defaultValue={data[0].address} ref={register({ required: true })}></textarea>
                        {errors.address && <ErrMsg>This field is required</ErrMsg>}
                    </label>
                        <input type="submit" value="SUBMIT" />
            </FormContainer>
    )
}

export default UpdateProfile

// const updateProfile = (data) => {
    //     console.log(data)
    // }
    // // const updateProfile = ApiPlus("post", 'users/update', data, user, usersCountry)
    
    // const [mutateProfile] = useMutation(updateProfile )
    // // const [mutateProfile] = useMutation(updateProfile, {
    //     // onSuccess: () => queryCache.invalidateQueries("userProfile")
    // // })
    
    // const { register, handleSubmit, errors } = useForm();
    
    // const submitForm = e => {
    //     mutateProfile(data)
    //     // mutateProfile("post", 'users/update', e, user, usersCountry)
    // };
    // // const [mutateProfile] = useMutation(FormData => ApiPlus("post", 'users/update', FormData, user, usersCountry) )
    // // const submitForm = data => {
    // //     mutation.mutate(new FormData(data))
    // // }
