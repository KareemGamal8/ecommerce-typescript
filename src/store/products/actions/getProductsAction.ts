import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProductsAction = createAsyncThunk(
  "products/getProducts",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios.get(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue("An expected error!");
    }
  }
);

export default getProductsAction;
