import React from 'react';

import { useDispatch } from 'react-redux';
import {
  removeItem,
  addItem,
  removeCartItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout.item.styles';

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeCartItem(cartItem))}>&#10094;</div>
        <span>{quantity}</span>

        <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => dispatch(removeItem(cartItem))}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
