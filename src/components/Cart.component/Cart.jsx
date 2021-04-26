import React from 'react';
import './Cart.styles.scss';
import { ReactComponent as CartIcon } from '../asset/shopping-bag.svg';
import { toggleCart } from '../../Redux/cartReducer/cartActions';
import { connect } from 'react-redux';

const Cart = ({toggleCart}) => {
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <CartIcon className='shopping-icon' />
  <span className='item-count'>{}</span>
    </div>
  );
};



const mapDispatchToProps = (dispatch) => ({
   toggleCart:() => dispatch(toggleCart())
});

export default connect(null,mapDispatchToProps)(Cart);
