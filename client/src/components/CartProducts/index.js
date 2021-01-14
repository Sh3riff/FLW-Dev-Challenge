import React, { useContext } from 'react';
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { CartContext } from '../../contexts';
import { CartProductCard, CartInfoCard } from './CartStyles'
import { formatNumber } from '..';
import deliveryImage from './delivery.jpg'

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <>
        <CartProductCard>
            <img alt={product.name} src={product.photo} />
            <h5>{product.name}</h5>
            <p>Price: {formatNumber(product.price)} (x {product.quantity}) </p>
            <button onClick={() => increase(product)}> <MdAddCircle /> </button>

            {
                product.quantity > 1 &&
                <button onClick={() => decrease(product)} > <MdRemoveCircle width={"20px"}/> </button>
            }
            {
                product.quantity === 1 &&
                <button onClick={() => removeProduct(product)} > <MdDelete width={"20px"}/> </button>
            }
        </CartProductCard>
        </>
     );
}

const CartProducts = () => {
    const { cartItems, itemCount } = useContext(CartContext);
    const deliveryFee = 200;
    return (
        <CartInfoCard>
            {
                cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
            }
            <CartProductCard>
                <img src={ deliveryImage }/>
                <h5>Delivery Fee</h5>          
                <p>Price: {formatNumber( deliveryFee * itemCount)} (x {itemCount}) </p>            
            </CartProductCard>
        </CartInfoCard>
    )
}

export default CartProducts
