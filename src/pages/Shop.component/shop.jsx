import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/Preview.component/CollectionsPreview';

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({  id,...otherPreviewCollections  }) => (
          <CollectionPreview key={id} {...otherPreviewCollections} />
        ))}
      </div>
    );
  }
}

export default Preview;
