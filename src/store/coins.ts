import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCoins = createAsyncThunk("coins/getCoins", async () => {
  return fetch("https://api.coincap.io/v2/assets?limit=10").then((res) =>
    res.json()
  );
});
// @ts-ignore
const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    loading: false,
  },
  extraReducers: {
    // @ts-ignore
    [getCoins.pending]: (state, action) => {
      state.loading = true;
    },
    // @ts-ignore
    [getCoins.fulfilled]: (state, action) => {
      state.loading = false;
      state.coins = action.payload;
    },
    // @ts-ignore
    [getCoins.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default coinsSlice.reducer;
