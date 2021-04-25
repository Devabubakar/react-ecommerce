import React from 'react';
import PreviewItem from '../Preview-Item.component/preview-item';

import './collection-preview.styles.scss';

const CollectionsPreview = ({ title, items, }) => {
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
