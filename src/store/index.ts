import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import orderDetailSlice from "./orderDetailSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    orderDetail: orderDetailSlice,
    // app: appSlice,
    // search: searchSlice,
    // chat: chatSlice,
    // popularVideo: popularVideoSlice,
    // searchVideo: searchedVideosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
