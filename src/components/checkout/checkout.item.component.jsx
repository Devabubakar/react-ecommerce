import React from 'react';

import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  removeCartItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout.item.styles';

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer src={imageUrl} alt='item' />
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>

        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <span>{price}</span>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispathToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(removeItem(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeCartItem(cartItem)),
});

export default connect(null, mapDispathToProps)(CheckOutItem);
