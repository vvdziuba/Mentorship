import {
  createSlice,
  createAsyncThunk,
  ThunkAction,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CoinsItems {
  name: string;
  priceUsd: number;
  id: string;
}

export const getCoins = createAsyncThunk("coins/getCoins", async () => {
  return fetch("https://api.coincap.io/v2/assets?limit=10").then((res) =>
    res.json()
  );
});

export const getCoinsThunk =
  (
    limit: number | undefined = 10
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    dispatch(setLoader(true));
    try {
      const coinsResp = await fetch(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      const coins = await coinsResp.json();
      dispatch(setCoins(coins as CoinsItems));
    } catch (e: any) {
      dispatch(setError(e?.message));
    }
    dispatch(setLoader(false));
  };

// @ts-ignore
const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [] as CoinsItems[],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
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

export const { setCoins, setLoader, setError } = coinsSlice.actions;

export default coinsSlice.reducer;
