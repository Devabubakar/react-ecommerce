import cartTypes from './cart.types';
export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});
