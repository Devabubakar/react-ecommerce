import React from 'react';
import './cart.dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart.item/cartItem.component';
import { connect } from 'react-redux';
import { cartItemSelector } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty'>Your Cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
