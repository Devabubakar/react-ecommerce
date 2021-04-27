import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const selectCollections = createSelector([shopSelector], (shop) => shop.collections);

export const collectionObject = createSelector([selectCollections], (collections) =>
  Object.keys(collections).map((key) => collections[key])
);

export const categoryCollections = (categoryUrlParams) =>
  createSelector(
    [collectionObject],
    (collections) => collections[categoryUrlParams]
  );