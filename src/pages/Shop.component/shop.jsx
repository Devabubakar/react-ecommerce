import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStarts } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/shop.overview/shop.container';
import CollectionPageContainer from '../../components/category/category.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStarts } = this.props;

    fetchCollectionsStarts();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:category`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStarts: () => dispatch(fetchCollectionsStarts())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);