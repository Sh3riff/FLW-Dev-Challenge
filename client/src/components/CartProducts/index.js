import React, { useContext } from 'react';
import { useLocalStorage, setCurrency } from '../../utils';
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { CartContext } from '../../contexts';
import { CartProductCard, CartInfoCard } from './CartStyles'
import deliveryImage from './delivery.jpg'

const CartItem = ({product, currency}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <>
        <CartProductCard>
            <img alt={product.name} src={product.photo} />
            <h5>{product.name}</h5>
            <p>Price: {currency}{product.price} (x {product.quantity}) </p>
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
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);
    const { cartItems, itemCount } = useContext(CartContext);
    const deliveryFee = 150;
    let currency = setCurrency(usersCountry)
    return (
        <CartInfoCard>
            {
                cartItems.map(product =>  <CartItem key={product.id} product={product} currency={currency}/>)
            }
            <CartProductCard>
                <img src={ deliveryImage }/>
                <h5>Delivery Fee</h5>          
                <p>Price: {currency}{( deliveryFee * itemCount)} (x {itemCount}) </p>            
            </CartProductCard>
        </CartInfoCard>
    )
}

export default CartProducts
