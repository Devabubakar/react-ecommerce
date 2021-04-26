import React from 'react';
import './Cart-dropdown.styles.scss';
import Button from '../Button.component/button';
import CartItem from '../Cart-Item.component/CartItem';
import { connect } from 'react-redux';
import { cartItemSelector } from '../../Redux/cartReducer/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../Redux/cartReducer/cartActions';

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
