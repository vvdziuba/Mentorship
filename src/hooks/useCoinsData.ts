import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useFetchCoinsData } from "./fetchCoinsData";

export const useCoinsData = (limit: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const { getCoinsThunk } = useFetchCoinsData();
  const { coins, loading } = useSelector((store: RootState) => store?.coins);

  useEffect(() => {
    dispatch(getCoinsThunk(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshCoins = () => {
    dispatch(getCoinsThunk(coins.length + limit));
  };

  return {
    refreshCoins,
    coins,
    loading,
  };
};
