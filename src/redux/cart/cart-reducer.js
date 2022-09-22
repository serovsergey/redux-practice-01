import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.constants"

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case (ADD_TO_CART):
      return [...state, payload];
    case (REMOVE_FROM_CART):
      return state.filter(item => item.id !== payload)
    default:
      return state;
  }
}

export default cartReducer;
