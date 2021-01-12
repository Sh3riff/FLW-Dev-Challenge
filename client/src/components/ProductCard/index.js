import React from 'react'
import { Card } from './ProductCardStyle'

const ProductCard = ({productInfo }) => {

    const { productName, url, price, isInCart, productId } = productInfo;

    return (
        <Card>
            <img src={url} alt={productName}/>

            <div>
                <div className="basic-info">
                    <p>{productName}</p>
                    <p>{price}</p>
                </div>
                {!isInCart ?
                    <button>ADD TO CART </button>
                :
                    <button>ADD MORE </button>
                }
            </div>
        </Card>
    )
}

export default ProductCard
