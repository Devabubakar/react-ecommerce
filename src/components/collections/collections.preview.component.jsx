import React from 'react';
import PreviewItem from '../collection.item/collection.item.component.jsx';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection.preview.styles.jsx';



const CollectionsPreview = ({ collection }) => {
  const {title ,items} = collection
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>

      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(( item ) => {
            return <PreviewItem key={item.id} item={item} />;
          })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionsPreview;
