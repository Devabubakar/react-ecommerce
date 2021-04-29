import React from 'react';

import './collection.item.styles.scss';
import Button from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const PreviewItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(PreviewItem);
