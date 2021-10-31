import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import {
  cartItemSelector,
  cartPriceCount,
} from '../../redux/cart/cart.selector';
import CheckOutItem from '../checkout.item/checkout.item.component';
import StripeButton from '../stripe.button/stripe.button';
import {
  CheckoutHeader,
  CheckoutPage,
  CheckoutTotal,
  CheckoutWarning,
  HeaderBlock,
} from './checkout.styles';

const ProductDisplay = () => {
  const cartItems = useSelector(cartItemSelector);
  const cartPrice = useSelector(cartPriceCount);
  return (
    <div>
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
      </CheckoutPage>
      ;
      <StripeButton />;
    </div>
  );
};

const Message = ({ message }) => {
  <section>
    <p>{message}</p>
  </section>;
};

const CheckOut = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    //check for redirect
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setMessage('Order Placed ! You will receive a confirmation Message');
    }

    if (query.get('cancelled')) {
      setMessage('Order cancelled !');
    }
  }, []);
  

  return message ? <Message message={message} /> : <ProductDisplay />;
};

export default CheckOut;
