import React from 'react';
import './shop.overview.styles.scss'

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {collectionObject} from '../../redux/shop/shop.selectors'
import CollectionItems from '../collections/collections.preview.component'

const ShopOverview = ({ collections}) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(collection => 
          <CollectionItems key={collection.id} collection={collection} />


          )
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: collectionObject
})

export default connect(mapStateToProps)(ShopOverview);
