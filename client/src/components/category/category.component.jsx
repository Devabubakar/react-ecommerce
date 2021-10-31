import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { categoryCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collections/collections.preview.component';
import { Collectionoverview } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const collection = useSelector(categoryCollections(category));

  return (
    <Collectionoverview>
      <CollectionPreview collection={collection} />
    </Collectionoverview>
  );
};

export default Category;
