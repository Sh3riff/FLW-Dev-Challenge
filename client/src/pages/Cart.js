import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { CartProducts } from '../components'
import { CartContext } from '../contexts';
import { formatNumber } from '../components'
import { PageTemplate, InfoCard } from '../styles/components';
import styled from 'styled-components';

export const CartInfo = styled(InfoCard)`
    width: fit-content;
    h2,p{
        padding: 0;
    }
    div{
        display: flex;
        margin: 10px 0 0;
        button{
            position: static;
            margin: 5px;
        }
    }
`;

const Cart = () => {
    let history = useHistory();
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    return (
        <PageTemplate>
            <div>
                {
                    cartItems.length > 0 ?
                    <CartProducts/> :
                    <div>
                        Your cart is empty
                    </div>
                }

                { checkout && 
                    <InfoCard>
                        <p>Checkout successful</p>
                        <button onClick={ () => history.push('/')}>Buy More</button>
                    </InfoCard>
                }
            </div>
            {
                cartItems.length > 0 && 
                <CartInfo>
                    <p >Total Items</p>
                    <h2>{itemCount}</h2>
                    <p>Total Payment</p>
                    <h2>{formatNumber(total)}</h2>
                    <hr className="my-4"/>
                    <div >
                        <button onClick={handleCheckout}>CHECKOUT</button>
                        <button onClick={clearCart}>CLEAR</button>
                    </div>
              </CartInfo>
            }
        </PageTemplate>
    )
}

export default Cart
