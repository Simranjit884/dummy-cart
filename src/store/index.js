import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store-slices/cart-slice";
import uiReducer from "./store-slices/ui-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
