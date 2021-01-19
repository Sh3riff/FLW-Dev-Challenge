import React from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useMutation, useQueryClient  } from 'react-query';
import { InfoCard, Button } from "../../styles/components"
import { ApiPlus, FLW_Init } from '../../utils';

const CreateStorePayment = ( { passProps } ) => {
    const {user, usersCountry, info} = passProps
    const queryClient = useQueryClient();
    
    const config = {
    ...FLW_Init,
    tx_ref:`CreateStore-${user.email}`,
    amount: 20,
    currency: "USD",
    customer:{
        email: user.email,
        phonenumber: info.phone,
        name: `${info.firstName} ${info.lastName}`
    },
  };

  const MakePayment = useFlutterwave(config);

    const updateProfile = useMutation(updatedValue => ApiPlus("put", 'users/merchantuser', updatedValue, user, usersCountry),{
        onSuccess: data => queryClient.invalidateQueries('userProfile') 
    })

    return (
        <InfoCard>
            <h2>You are about to make a payment of $20 for creating a store</h2>
            <Button
                onClick={() => {
                MakePayment({
                    callback: (response) => {
                        updateProfile.mutate(info)
                            closePaymentModal()
                        },
                        onClose: () => {},
                    });
                }}
            >
                PAY NOW
            </Button>
        </InfoCard>
    )
}

export default CreateStorePayment
