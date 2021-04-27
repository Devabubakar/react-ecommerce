import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopItemsSelector } from '../../Redux/shopReducer/shopSelector';

import CollectionPreview from '../../components/Preview.component/CollectionsPreview';

const Preview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherPreviewCollections }) => (
        <CollectionPreview key={id} {...otherPreviewCollections} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopItemsSelector,
});

export default connect(mapStateToProps)(Preview);
