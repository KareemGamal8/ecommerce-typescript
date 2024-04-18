import { Category, Loading } from "@design-system/types";
import { createSlice } from "@reduxjs/toolkit";
import getCategoriesAction from "./actions/getCategoriesAction";

interface InitialStateTypes {
  records: Category[];
  loading: Loading;
  error: string | null;
}

const initialState: InitialStateTypes = {
  records: [],
  loading: "idle",
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategoriesAction.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getCategoriesAction.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.records = action.payload;
    });
    builder.addCase(getCategoriesAction.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default categoriesSlice.reducer;
