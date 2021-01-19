export const FLW_Init ={
    public_key: process.env.REACT_APP_FLW,
    payment_options: 'card,mobilemoney,ussd',
    customizations: {
      title: 'Jumga-Mart',
      description: 'The Best E-Commerce Store',
      logo: 'https://s3card.s3.amazonaws.com/ast/FLW/jumga_logo.jpeg',
    },
};