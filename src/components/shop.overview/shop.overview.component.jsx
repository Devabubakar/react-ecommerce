import React from 'react';

import { useSelector } from 'react-redux';

import { collectionObject } from '../../redux/shop/shop.selectors';
import CollectionItems from '../collections/collections.preview.component';
import { CollectionPageContainer } from './shop.overview.styles';

const ShopOverview = () => {
  const collections = useSelector(collectionObject);
  return (
    <CollectionPageContainer>
      {collections.map((collection) => (
        <CollectionItems key={collection.id} collection={collection} />
      ))}
    </CollectionPageContainer>
  );
};

export default ShopOverview;
