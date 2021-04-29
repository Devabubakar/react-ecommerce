import React from 'react';
import CartItem from '../cart.item/cartItem.component';
import { connect } from 'react-redux';
import { cartItemSelector } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cart.actions';
import {CartDropContainer, CartDropdownButton, CartEmpty, CartItemContainer} from './cart.dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartEmpty>Your Cart is empty</CartEmpty>
        )}
      </CartItemContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
