import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// type CategoriesResponse = {
//   id: number;
//   title: string;
//   prefix: string;
//   img: string;
// };

export const getCategoriesAction = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios.get("/categories");
      return response.data;
    } catch (error) {
      axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue("An expected error!");
    }
  }
);
