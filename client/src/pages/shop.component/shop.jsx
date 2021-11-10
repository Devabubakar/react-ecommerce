import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStarts } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/shop.overview/shop.container')
);
const CollectionPageContainer = lazy(() =>
  import('../../components/category/category.container')
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStarts());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:category`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
