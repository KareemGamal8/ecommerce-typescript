import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;

    const { cart } = getState() as RootState;

    const itemsIds = Object.keys(cart.items);

    if (!itemsIds.length) return fulfillWithValue;

    try {
      const concatenatedItemsIds = itemsIds
        .map((itemId) => `id=${itemId}`)
        .join("&");
      const response = await axios.get(`/products?${concatenatedItemsIds}`);
      return response.data;
    } catch (error) {
      axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue("An expected error!");
    }
  }
);
