import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const getCartQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return totalQuantity;
  }
);
