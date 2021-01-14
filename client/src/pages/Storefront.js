import React from 'react';
import { ProductCard } from '../components';
import { PageTemplate, FlexyBox } from '../styles/components';

const photo = 'https://i.picsum.photos/id/806/536/354.jpg?hmac=cuS-BpiPqGiZFIRLcL_mn2r40jiBkagQRjOmo485OyM'

const products = [
    {
        id: "qwedsfr",
        name: "Iphone",
        photo,
        price: 24,
    },
    {
        id: "qwedsft",
        name: "Samsung",
        photo,
        price: 20,
    },
    {
        id: "qweusfr",
        name: "Sony",
        photo,
        price: 21,
    },
]

const Storefront = () => {
    return (
        <PageTemplate>
            <FlexyBox >
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
           </FlexyBox>
        </PageTemplate>
    )
}

export default Storefront
