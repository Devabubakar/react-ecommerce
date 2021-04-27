import React from 'react';
import './CheckOut.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartItemSelector,
  cartPriceCount,
} from '../../Redux/cartReducer/cart.selector';
import CheckOutItem from '../Checkout-Item.componet/CheckOutItem';
import StripeButton from '../stripe-button.component/stripeButton';

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
      <div className="warning-message">
          *FOR DEVELOPMENT PURPOSE ONLY : USE 
          <br/>
          CREDIT CARD : 4242 4242 4242 4242 -Exp: 01/23 -CVV :123
      </div>
      <StripeButton price ={cartPrice}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
  cartPrice: cartPriceCount,
});

export default connect(mapStateToProps)(CheckOut);
