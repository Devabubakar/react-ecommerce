import React from 'react';
import { Route } from 'react-router-dom';

import ShopOverview from '../../components/shop.overview/shop.overview.component';
import Category from '../../components/category/category.component';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with.spinner/with.spinner.component';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { collectionFetching, collectionIsLoaded } from '../../redux/shop/shop.selectors';

const ShopOverviewSpinner = WithSpinner(ShopOverview);
const CategoryOverviewSpinner = WithSpinner(Category);

class Preview extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync()
    
  }
  render() {
    const { match, collectionIsFetching } = this.props;
    
    return (
      <div>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <ShopOverviewSpinner isLoading={collectionIsFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:category`}
          render={(props) => (
            <CategoryOverviewSpinner
              isLoading={!collectionIsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collectionIsFetching: collectionFetching,
  collectionisLoaded : collectionIsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
