import React from 'react';
import { ReactComponent as CartIcon } from '../asset/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemCount } from '../../redux/cart/cart.selector';

import { CartCount, CartIconContainer } from './cart.styles';

const Cart = () => {
  
  const dispatch = useDispatch();

  const countItem = useSelector(cartItemCount);

  return (
    <CartIconContainer onClick={() => dispatch(toggleCart)}>
      <CartIcon />
      <CartCount>{countItem}</CartCount>
    </CartIconContainer>
  );
};

export default Cart;
