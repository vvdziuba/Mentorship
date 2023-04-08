import { createAsyncThunk, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import {
  CoinsItemInterface,
  setCoins,
  setError,
  setLoader,
} from "../store/coins";
import { RootState } from "../store/store";

export const useFetchCoinsData = () => {
  const getCoins = createAsyncThunk("coins/getCoins", async () => {
    return fetch("https://api.coincap.io/v2/assets?limit=10").then((res) =>
      res.json()
    );
  });

  const getCoinsThunk =
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

  return {
    getCoins,
    getCoinsThunk,
  };
};
