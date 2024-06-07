import { LoadingTypes, Product } from "@design-system/types";
import { createSlice } from "@reduxjs/toolkit";
import { getCartItems } from "./cartActions";

interface InitialStateTypes {
  items: { [key: number]: number };
  productsFullInfo: Product[];
  loading: LoadingTypes;
  error: string | null;
}

const initialState: InitialStateTypes = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
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
  extraReducers(builder) {
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
