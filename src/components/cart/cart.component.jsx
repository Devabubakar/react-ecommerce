import React from 'react';
import { ReactComponent as CartIcon } from '../asset/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { cartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { CartCount, CartIconContainer } from './cart.styles';

const Cart = ({ toggleCart, countItem }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <CartIcon />
      <CartCount>{countItem}</CartCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  countItem: cartItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
