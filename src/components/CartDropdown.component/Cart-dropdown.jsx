import React from 'react';
import './Cart-dropdown.styles.scss';
import Button from '../Button.component/button';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'/>
      <Button  >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
