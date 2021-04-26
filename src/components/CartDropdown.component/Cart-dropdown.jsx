import React from 'react';
import './Cart-dropdown.styles.scss';
import Button from '../Button.component/button';
import CartItem from '../Cart-Item.component/CartItem';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = ({ cart: {cartItems} }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
