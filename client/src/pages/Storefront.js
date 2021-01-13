import React from 'react';
import { ProductCard } from '../components';
import { PageTemplate, FlexyBox } from '../styles/components';

const productInfo = {
    productName: "Iphone",
    url: 'https://i.picsum.photos/id/806/536/354.jpg?hmac=cuS-BpiPqGiZFIRLcL_mn2r40jiBkagQRjOmo485OyM',
    price: "$24",
    isInCart: 0,
    productId: "qwedsfr",
}

const Storefront = () => {
    return (
        <PageTemplate>
            <FlexyBox >
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
           </FlexyBox>
        </PageTemplate>
    )
}

export default Storefront
