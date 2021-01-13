import React from 'react';
import { useForm } from "react-hook-form";
import { PageTemplate, FormContainer } from '../styles/components';

const Profile = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <PageTemplate>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <legend><span class="number">1</span> User Info</legend>
                    <label>First:</label>
                    <input type="text" name="firstName" placeholder="First Name" ref={register({ required: true })} />
                    {errors.firstName && <span>This field is required</span>}
                    <label>LastName:</label>
                    <input type="text" name="lastName" placeholder="Last Name" ref={register({ required: true} )} />
                    {errors.lastName && <span>This field is required</span>}
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email format" } })} />
                    {errors.email && <span>This field is required</span>}
                <legend><span class="number">2</span> User Address</legend>
                    <label>Country:</label>
                    <select name="country" ref={register({ required: true })}>
                        <option value="">...</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Uk">Uk</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    {errors.country && <span>This field is required</span>}
                    <label>Address:</label>
                    <textarea name="address" placeholder="Enter Full Address" ref={register({ required: true })}></textarea>
                    {errors.address && <span>This field is required</span>}
                    <input type="submit" value="SUBMIT" />
            </FormContainer>
        </PageTemplate>
    )
}

export default Profile
