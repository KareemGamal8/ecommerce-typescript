import { Product } from "@design-system/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  items: { [key: number]: number };
  productFullInfo: Product[];
}

const initialState: InitialStateTypes = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
