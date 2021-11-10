import React from 'react';
import CustomButton from '../button/button.component';

const StripeButton = () => {
  return (
    <form method='POST' action='/create-checkout-session'>
      <CustomButton type='submit' stripe>
        Checkout
      </CustomButton>
    </form>
  );
};

export default StripeButton;
