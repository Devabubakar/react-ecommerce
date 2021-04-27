import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const shopItemsSelector = createSelector(
    [shopSelector],
    shopItems => shopItems.shop
)
