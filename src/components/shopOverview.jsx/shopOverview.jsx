import React from 'react';
import './shopOverview.scss'

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {collectionObject} from '../../Redux/shopReducer/shopSelector'
import CollectionItems from '../collections.component/CollectionsPreview'

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
