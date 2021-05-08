import React from 'react';
import { connect } from 'react-redux';

import { categoryCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collections/collections.preview.component';
import { Collectionoverview } from './category.styles';

const Category = ({ collection }) => {
  
  return (
    <Collectionoverview>
      <CollectionPreview collection={collection} />
    </Collectionoverview>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: categoryCollections(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(Category);
