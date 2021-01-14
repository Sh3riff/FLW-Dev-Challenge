import React, { useContext } from 'react'
import { CartContext } from '../../contexts';
import { Card } from './ProductCardStyle'

const ProductCard = ({ product }) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);
    const { name, id, photo, price } = product;

    const isInCart = id => {
        return !!cartItems.find(item => item.id === id);
    }

    return (
        <Card>
            <img src={photo} alt={name}/>
            <div>
                <div className="basic-info">
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
                {
                    isInCart(id) ?
                    <button onClick={() => increase(product)}>ADD MORE</button> :
                    <button onClick={() => addProduct(product)}>ADD TO CART</button>
                }
            </div>
        </Card>
    )
}

export default ProductCard
