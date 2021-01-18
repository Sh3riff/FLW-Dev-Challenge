import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { ApiGet, useLocalStorage  } from '../utils'
import { UpdateProfile, Loading, Error } from "../components";
import { PageTemplate, InfoCard } from '../styles/components';

const Profile = () => {
    const { user } = useAuth0()
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);    
    const { isLoading, error, data } = useQuery('userProfile', () =>ApiGet("users/getprofile", user, usersCountry))
    const [isEdit, setIsEdit] = useState(false)
    const toggleEdit = () => setIsEdit(!isEdit);
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)
    const passThisProps = { data, user, usersCountry, toggleEdit}
    return (
        <PageTemplate>
            { !isEdit ? 
                <InfoCard>
                    <p>FirstName: {data[0].firstName}</p>
                    <p>LastName: {data[0].lastName}</p>
                    <p>Email: {data[0].email}</p>
                    <p>Phone: {data[0].phone}</p>
                    <p>Country: {data[0].country}</p>
                    <p>Address: {data[0].address}</p>
                    <button onClick={ () => toggleEdit() }>Edit Profile</button>
                </InfoCard>
                :
                < UpdateProfile  passThisProps={passThisProps}/>
            }
        </PageTemplate>
    )
}

export default Profile
