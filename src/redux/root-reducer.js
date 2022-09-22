import cartReducer from "./cart/cart-reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
})

export default rootReducer;
