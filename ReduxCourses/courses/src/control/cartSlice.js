import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 5,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
      }
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total = total + item.quantity * item.price;
        quantity = quantity + item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
