import React from 'react';
import { connect } from 'react-redux';

import { categoryCollections } from '../../Redux/shopReducer/shopSelector';
import CollectionPreview from '../collections.component/CollectionsPreview'

const Category = ({collection}) => {
  return(
      <div>
          <CollectionPreview collection={collection}/>
          
      </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: categoryCollections(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(Category);
