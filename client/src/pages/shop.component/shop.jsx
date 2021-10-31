import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStarts } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/shop.overview/shop.container';
import CollectionPageContainer from '../../components/category/category.container';

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStarts());
  }, [dispatch]);

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
};

export default ShopPage;
