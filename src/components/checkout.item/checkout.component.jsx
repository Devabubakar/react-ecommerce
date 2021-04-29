import React from 'react';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartItemSelector,
  cartPriceCount,
} from '../../redux/cart/cart.selector';
import CheckOutItem from '../checkout/checkout.item.component';
import StripeButton from '../stripe.button/stripe.button';
import { CheckoutHeader, CheckoutPage, CheckoutTotal, CheckoutWarning, HeaderBlock } from './checkout.styles';

const CheckOut = ({ cartItems, cartPrice }) => {
  return (
    <CheckoutPage>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <CheckoutTotal>{cartPrice} $</CheckoutTotal>
      <CheckoutWarning>
        *FOR DEVELOPMENT PURPOSE ONLY : USE
        <br />
        CREDIT CARD : 4242 4242 4242 4242 -Exp: 01/23 -CVV :123
      </CheckoutWarning>
      <StripeButton price={cartPrice} />
    </CheckoutPage>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
  cartPrice: cartPriceCount,
});

export default connect(mapStateToProps)(CheckOut);
