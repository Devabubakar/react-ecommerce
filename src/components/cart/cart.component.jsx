import React from 'react';
import './cart.styles.scss';
import { ReactComponent as CartIcon } from '../asset/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
import { cartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const Cart = ({ toggleCart, countItem }) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <CartIcon className='shopping-icon' />
      <span className='item-count'>{countItem}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  countItem: cartItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
