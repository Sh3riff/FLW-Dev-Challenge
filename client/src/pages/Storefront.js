import React from 'react';
import { ProductCard } from '../components';
import { PageTemplate } from '../styles/components';
import styled from 'styled-components';

const StoreBox = styled.div`
    width: min(100%, 1020px);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`;

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
            <StoreBox>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
                <ProductCard productInfo ={ productInfo }/>
           </StoreBox>
        </PageTemplate>
    )
}

export default Storefront
