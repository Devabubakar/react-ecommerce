import cartTypes from './cart.types';
export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART,
});

export const removeItem = (cartItem) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: cartItem,
});
export const removeCartItem = (cartItem) => ({
  type: cartTypes.REMOVE_CART_ITEM,
  payload: cartItem,
});
export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});
