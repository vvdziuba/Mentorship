import {
  createSlice,
  createAsyncThunk,
  ThunkAction,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CoinsItemInterface {
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
  async (dispatch) => {
    dispatch(setLoader(true));
    try {
      const coinsResp = await fetch(
        `https://api.coincap.io/v2/assets?limit=${limit}`
      );
      const { data: coins } = await coinsResp.json();
      dispatch(setCoins(coins as CoinsItemInterface[]));
    } catch (e: any) {
      dispatch(setError(e?.message));
    }
    dispatch(setLoader(false));
  };

interface InitialState {
  coins: CoinsItemInterface[];
  loading: boolean;
  errorMessage: string;
}

const initialState: InitialState = {
  coins: [],
  loading: false,
  errorMessage: "",
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<CoinsItemInterface[]>) => {
      state.coins = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload;
    });
    builder.addCase(getCoins.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setCoins, setLoader, setError } = coinsSlice.actions;

export default coinsSlice.reducer;
