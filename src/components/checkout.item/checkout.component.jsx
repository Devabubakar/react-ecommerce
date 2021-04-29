import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartItemSelector,
  cartPriceCount,
} from '../../redux/cart/cart.selector';
import CheckOutItem from '../checkout/checkout.item.component';
import StripeButton from '../stripe.button/stripe.button';

const CheckOut = ({ cartItems, cartPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>{cartPrice} $</div>
      <div className='warning-message'>
        *FOR DEVELOPMENT PURPOSE ONLY : USE
        <br />
        CREDIT CARD : 4242 4242 4242 4242 -Exp: 01/23 -CVV :123
      </div>
      <StripeButton price={cartPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
  cartPrice: cartPriceCount,
});

export default connect(mapStateToProps)(CheckOut);
