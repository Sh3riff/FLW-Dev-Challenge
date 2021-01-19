import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery} from 'react-query';
import { CartProducts, Loading, Error, CheckoutPay } from '../components'
import { CartContext } from '../contexts';
import { useLocalStorage, setCurrency, cartSorter, ApiGet } from '../utils';
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
    const { user } = useAuth0()
    const [usersCountry, setUsersCountry] = useLocalStorage('usersCountry', null);
    const { isLoading, error, data } = useQuery('userProfile', () =>ApiGet("users/getprofile", user, usersCountry))
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    if(isLoading) return( <Loading />)
    if(error) return( <Error />)

    let currency = setCurrency(usersCountry)

    let subaccounts;

    const finalCheckout = () => {
        const deliveryFee = 150;
        const CouriersRatio = 0.8;
        const subAccts = cartSorter(cartItems)
        const withDelivery = [...subAccts, {
            id: "RS_7A6130FDE407F2188C3481AA0A291E9D",
            transaction_charge_type: "flat_subaccount",
            transaction_charge: deliveryFee * itemCount * CouriersRatio
        }]
        subaccounts = withDelivery   
        // console.log(config)
        // console.log(cartItems)
        // handleCheckout()
    }
    finalCheckout()

    const passProps = {
        user: data[0],
        country: usersCountry,
        subaccounts,
        total,
        cartItems,
        handleCheckout
    }
    
    return (
        <PageTemplate>
            <div>
                {
                    cartItems.length > 0 ?
                    <CartProducts /> :
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
                    <h2>{currency}{total}</h2>
                    <hr className="my-4"/>
                    <div >
                        <CheckoutPay takeProps={passProps}/>
                        {/* <button onClick={ () => finalCheckout()}>CHECKOUT</button> */}
                        <button onClick={clearCart}>CLEAR</button>
                    </div>
              </CartInfo>
            }
        </PageTemplate>
    )
}

export default Cart
