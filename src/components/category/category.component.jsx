import React from 'react';
import { connect } from 'react-redux';

import { categoryCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collections/collections.preview.component'
import './category.styles.scss'

const Category = ({collection}) => {
  return(
      <div className='collections-overview'>
          <CollectionPreview collection={collection}/>
          
      </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: categoryCollections(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(Category);
