import { Loading, Product } from "@design-system/types";
import { createSlice } from "@reduxjs/toolkit";
import getProductsAction from "./actions/getProductsAction";

interface InitialStateTypes {
  records: Product[];
  loading: Loading;
  error: string | null;
}

const initialState: InitialStateTypes = {
  records: [],
  loading: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanup: (state) => {
      state.records = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getProductsAction.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.records = action.payload;
    });
    builder.addCase(getProductsAction.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { productsCleanup } = productsSlice.actions;
export default productsSlice.reducer;
