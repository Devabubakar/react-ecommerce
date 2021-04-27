import React from 'react';

import './preview-item.styles.scss';
import Button from '../Button.component/button';
import { addItem } from '../../Redux/cartReducer/cartActions';
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
