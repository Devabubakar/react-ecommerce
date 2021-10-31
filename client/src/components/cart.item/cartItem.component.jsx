import React from 'react';
import { CartImage, CartItemContainer, CartItemDetail } from './cartItem.styles';


const CartItem = ({ item : {imageUrl, name, price, quantity }}) => {
  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt='item' />
      <CartItemDetail>
        <span >{name}</span>
        <span >{quantity}X{price} $</span>
      </CartItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
