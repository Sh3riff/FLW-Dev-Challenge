import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { CloseIcon } from "../components";
import { PageTemplate, InfoCard, FormContainer, ErrMsg } from '../styles/components';

const Profile = () => {
    const [isEdit, setIsEdit] = useState(false)
    const toggleEdit = () => setIsEdit(!isEdit);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <PageTemplate>
            { !isEdit ? 
                <InfoCard>
                    <p>FirstName:</p>
                    <p>LastName:</p>
                    <p>Email:</p>
                    <p>Country:</p>
                    <p>Address:</p>
                    <button onClick={ () => setIsEdit(!isEdit) }>Edit Profile</button>
                </InfoCard>
                :
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    < CloseIcon closeHandler={ setIsEdit }/>
                    <legend><span class="number">1</span> User Info</legend>
                        <label>FirstName:
                            <input type="text" name="firstName" placeholder="First Name" ref={register({ required: true })} />
                            {errors.firstName && <ErrMsg>This field is required</ErrMsg>}
                        </label>
                        <label>LastName:
                            <input type="text" name="lastName" placeholder="Last Name" ref={register({ required: true} )} />
                            {errors.lastName && <ErrMsg>This field is required</ErrMsg>}
                        </label>
                        <label>Email:
                            <input type="email" name="email" placeholder="Email" ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email format" } })} />
                            {errors.email && <ErrMsg>This field is required</ErrMsg>}
                        </label>
                    <legend><span class="number">2</span> User Address</legend>
                        <label>Country:
                            <select name="country" ref={register({ required: true })}>
                                <option value="">...</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Uk">Uk</option>
                                <option value="Kenya">Kenya</option>
                            </select>
                            {errors.country && <ErrMsg>This field is required</ErrMsg>}
                        </label>
                        <label>Address:
                            <textarea name="address" placeholder="Enter Full Address" ref={register({ required: true })}></textarea>
                            {errors.address && <ErrMsg>This field is required</ErrMsg>}
                        </label>
                            <input type="submit" value="SUBMIT" />
                </FormContainer>
            }
        </PageTemplate>
    )
}

export default Profile
