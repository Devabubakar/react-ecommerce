import { createSelector } from 'reselect';

export const shopSelector = (state) => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const collectionObject = createSelector(
  [selectCollections],
  (collections) => collections ?  Object.keys(collections).map((key) => collections[key]) : []
);

export const categoryCollections = (categoryUrlParams) =>
  createSelector(
    [selectCollections],
    (collections) => collections ? collections[categoryUrlParams] : []
  );
