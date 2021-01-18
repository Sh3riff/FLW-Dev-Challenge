import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Button } from "../../styles/components"


export const FLW_Init ={
    public_key: process.env.REACT_APP_FLW,
    payment_options: 'card,mobilemoney,ussd',
    customizations: {
      title: 'Jumga-Mart',
      description: 'The Best E-Commerce Store',
      logo: 'https://s3card.s3.amazonaws.com/ast/FLW/jumga_logo.jpeg',
    },
};

const Flutterwave = ({TransactionDetails}) => {
    const { tx_ref, amount, currency, customer, subaccounts=false} = TransactionDetails;

  const config = {
    public_key: process.env.REACT_APP_FLW,
    tx_ref,
    amount,
    currency,
    payment_options: 'card,mobilemoney,ussd',
    customer,
    subaccounts,
    customizations: {
      title: 'Jumga-Mart',
      description: 'The Best E-Commerce Store',
      logo: 'https://s3card.s3.amazonaws.com/ast/FLW/jumga_logo.jpeg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <Button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal()
            },
            onClose: () => {},
          });
        }}
      >
        PAY NOW
      </Button>
  );
}

export default Flutterwave

// let hi = {
//     tx_ref = "Ab",
//     currency = "ng",
//     customer= {
//         email: 'user@gmail.com',
//         phonenumber: '07064586146',
//         name: 'joel ugwumadu',
//     }
    //     subaccounts: [
    //     {
    //       id: "RS_D87A9EE339AE28BFA2AE86041C6DE70E",
    //       transaction_charge_type: "flat_subaccount",
    //       transaction_charge: "100"
    //     },
              
    //     {
    //       id: "RS_344DD49DB5D471EF565C897ECD67CD95",
    //       transaction_charge_type: "flat_subaccount",
    //       transaction_charge: "100"
    //     },
              
    //     {
    //       id: "RS_839AC07C3450A65004A0E11B83E22CA9",
    //       transaction_charge_type: "flat_subaccount",
    //       transaction_charge: "100"
    //     }
        
    //   ],
// }