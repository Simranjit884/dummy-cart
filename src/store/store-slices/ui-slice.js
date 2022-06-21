import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { showCart: true };

const uiSlice = createSlice({
  name: "ui",
  initialState: cartInitialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
