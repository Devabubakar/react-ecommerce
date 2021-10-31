import { createSelector } from 'reselect';


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
export const categoryCollections = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const collectionFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const collectionIsLoaded = createSelector(
  [shopSelector],
  shop => !!shop.collections
)
