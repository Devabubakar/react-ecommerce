import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;


const COLLECTIONS_ID_MAP = {
    hats : 1,
    sneakers :2,
    jackets :3,
    womens:4,
    mens:5

}

export const selectShop = createSelector(
    [shopSelector],
    shop => shop.shop
)