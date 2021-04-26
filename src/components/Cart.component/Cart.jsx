import React from 'react';
import './Cart.styles.scss';
import { ReactComponent as CartIcon } from '../asset/shopping-bag.svg';
import { toggleCart } from '../../Redux/cartReducer/cartActions';
import { connect } from 'react-redux';

const Cart = ({ toggleCart, countItem }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <CartIcon className='shopping-icon' />
      <span className='item-count'>{countItem}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  countItem: cartItems.reduce(
    (cummulated, cartItem) => cummulated + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
