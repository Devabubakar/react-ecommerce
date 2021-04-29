import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartItemSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const selectHiddenCart = createSelector(
  [cartSelector],
  (cart) => cart.hidden
);

export const cartPriceCount = createSelector([cartItemSelector], (cartItems) =>
  cartItems.reduce((accumulatorQuantity,cartItem) => accumulatorQuantity + cartItem.quantity * cartItem.price,0)
);
export const cartItemCount = createSelector([cartItemSelector], (cartItems) =>
  cartItems.reduce((cummulated, cartItem) => cummulated + cartItem.quantity, 0)
);
