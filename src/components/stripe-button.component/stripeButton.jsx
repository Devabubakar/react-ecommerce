import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceInDollars = price * 100;
  const publishableToken =
    'pk_test_51IkrCxBBmwstr0BYX9M9zIFUDmLWohNIhq46sYOLcA21fS3yxZGPwxB3fUkKH6M0z9xEZLParrJSKQ7arGAnFZnm008AMKbh41';
  const onToken = (token) => {
    alert('Payment successfully');
    console.log(token);
  };
  return (
    
      <StripeCheckout
        label='Pay Now '
        token={onToken}
        stripeKey={publishableToken}
        panelLabel='Pay Now '
        name='React Ecommerce'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}$`}
        amount={priceInDollars}
      />
    
  );
};

export default StripeButton;
