import React from 'react';

import './preview-item.styles.scss';
import Button from '../Button.component/button';

const PreviewItem = ({ imageUrl, name, price }) => {
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
      <Button inverted>Add to Cart</Button>
    </div>
  );
};

export default PreviewItem;
