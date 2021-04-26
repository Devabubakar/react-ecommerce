import cartTypes from './cart.types';
import { addCartItem } from './cart.utils';
const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };

    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
export default cartReducer;
