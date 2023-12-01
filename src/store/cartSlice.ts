import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: { payload: Product }) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action: { payload: number }) => {
      return state.filter((product) => product.id != action.payload);
    },
  },
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
