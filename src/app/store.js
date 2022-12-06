import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice"; // Penamaan productReducer itu bebas bisa diganti menggunakan nama yang lain

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
