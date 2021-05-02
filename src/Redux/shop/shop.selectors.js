import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const shopSelector = (state) => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionObject = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
)

export const categoryCollections = memoize((categoryUrlParams) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[categoryUrlParams] : []
  ))

export const collectionFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const collectionIsLoaded = createSelector(
  [shopSelector],
  shop => !!shop.collections
)
