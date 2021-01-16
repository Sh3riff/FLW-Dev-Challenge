import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { ApiGet } from '../utils'
import { ProductCard, Loading, Error } from '../components';
import { PageTemplate, FlexyBox } from '../styles/components';

const Storefront = () => {
    const { user } = useAuth0()
    const { isLoading, error, data } = useQuery('storeFront', () =>ApiGet("products/getAll"))
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)
    return (
        <PageTemplate>
            <FlexyBox >
                {
                    data.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
           </FlexyBox>
        </PageTemplate>
    )
}

export default Storefront
