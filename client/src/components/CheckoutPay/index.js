import React from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useMutation, useQueryClient  } from 'react-query';
import { Button } from '../../styles/components'
import {  payCurrency, FLW_Init, ApiPlus } from '../../utils'

const CheckoutPay = ({takeProps}) => {
    const { user, country, total, cartItems, handleCheckout, subaccounts } = takeProps
    const queryClient = useQueryClient();
    const updateTransact = useMutation(newTransact => ApiPlus("post", 'transactions/add', newTransact, user, country),{
        onSuccess: data => console.log("Transaction Successful")
        // onSuccess: data => queryClient.invalidateQueries('userProfile')
    })
    
    let FLW_Currency = payCurrency(country)
    const config = {
            ...FLW_Init,
            tx_ref:`Purchase-${user.email}-${Date.now()}`,
            amount: total,
            currency: FLW_Currency,
            subaccounts,
            customer:{
                email: user.email,
                phonenumber: user.phone,
                name: `${user.firstName} ${user.lastName}`
            }
    }
    const MakePayment = useFlutterwave(config);

    return (
        <Button onClick={() => {
            MakePayment({
                callback: (response) => {
                    updateTransact.mutate({"transactions": cartItems})
                    handleCheckout()
                    closePaymentModal()
                    },
                    onClose: () => {},
                });
        }}>CHECKOUT</Button>
    )
}

export default CheckoutPay
