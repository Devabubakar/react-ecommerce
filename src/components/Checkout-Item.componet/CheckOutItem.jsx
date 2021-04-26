import React from 'react';
import './CheckOutItem.styles.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../Redux/cartReducer/cartActions';


const CheckOutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispathToProps = dispatch => ({
  clearItem : (cartItem) => dispatch(removeItem(cartItem))
})

export default connect(null,mapDispathToProps)(CheckOutItem);
