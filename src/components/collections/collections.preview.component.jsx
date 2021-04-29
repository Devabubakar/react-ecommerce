import React from 'react';
import PreviewItem from '../collection.item/preview.item.componentjsx';

import './collection-preview.styles.scss';

const CollectionsPreview = ({ collection }) => {
  const {title ,items} = collection
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>

      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(( item ) => {
            return <PreviewItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionsPreview;
