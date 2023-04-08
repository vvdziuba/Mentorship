import styled from "styled-components";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CoinsList from "./components/CoinsList";
import { useCoinsData } from "./hooks/useCoinsData";

const StyledLoader = styled(CircularProgress)`
  margin-top: 20px;
`;

const Coins = () => {
  //could be any user's choice limit number
  const { refreshCoins, loading } = useCoinsData(3);

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
