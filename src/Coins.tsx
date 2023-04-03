import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { AppDispatch, RootState } from "./store/store";
import { getCoinsThunk } from "./store/coins";
import CircularProgress from "@mui/material/CircularProgress";
import CoinsList from "./components/CoinsList";

const StyledLoader = styled(CircularProgress)`
  margin-top: 20px;
`;

const Coins = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { coins, loading } = useSelector((store: RootState) => store?.coins);

  useEffect(() => {
    dispatch(getCoinsThunk(5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshCoins = () => {
    dispatch(getCoinsThunk(coins?.length + 1));
  };

  return (
    <>
      <Button variant="contained" onClick={refreshCoins}>
        Update Coins
      </Button>
      {loading && <StyledLoader color="secondary" />}
      <CoinsList />
    </>
  );
};

export default Coins;
