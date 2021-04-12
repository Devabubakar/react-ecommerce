import React from 'react';

import './preview-item.styles.scss';

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
        <span className='prie'>{price}</span>
      </div>
    </div>
  );
};

export default PreviewItem;
