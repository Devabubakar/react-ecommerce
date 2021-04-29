
import React from 'react';


import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {collectionObject} from '../../redux/shop/shop.selectors'
import CollectionItems from '../collections/collections.preview.component'
import { CollectionPageContainer } from './shop.overview.styles';

const ShopOverview = ({ collections}) => {
  return (
    <CollectionPageContainer>
      {
        collections.map(collection => 
          <CollectionItems key={collection.id} collection={collection} />


          )
      }
    </CollectionPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: collectionObject
})

export default connect(mapStateToProps)(ShopOverview);