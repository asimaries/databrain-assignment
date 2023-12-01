import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];
import {
  sortByRelevance,
  sortByPopularity,
  sortByPriceLowtoHigh,
  sortByPriceHightoLow,
  sortByDiscountPercentage,
} from "../utils/sortNfilter";

const sortProductsMap: { [key: string]: Function } = {
  sortByRelevance: sortByRelevance,
  sortByPopularity: sortByPopularity,
  sortByPriceLowtoHigh: sortByPriceLowtoHigh,
  sortByPriceHightoLow: sortByPriceHightoLow,
  sortByDiscountPercentage: sortByDiscountPercentage,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: { payload: Product[] }) => {
      return [...action.payload];
    },
    sortProducts: (state, action: { payload: string }) => {
      return sortProductsMap[action.payload](state);
    },
  },
});
export const { addProducts, sortProducts } = productSlice.actions;
export default productSlice.reducer;
