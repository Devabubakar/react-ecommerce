import React from 'react';
import CustomButton from '../button/button.component';
import WithSpinner from '../with.spinner/with.spinner.component';


const StripeButton = () => {
  return (
    <form method='POST' action='/create-checkout-session'>
      <CustomButton type='submit' stripe>
        Checkout
      </CustomButton>
    </form>
  );
};

export default WithSpinner(StripeButton);
