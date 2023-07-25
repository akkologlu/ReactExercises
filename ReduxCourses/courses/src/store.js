import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./control/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});
