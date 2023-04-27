import styled from "styled-components";
import { ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const StyledListItemText = styled(ListItemText)`
  text-align: center;
`;
const Coins = ({ coins }) => {
  const navigate = useRouter();

  const goHome = () => {
    navigate.replace("/");
  };
  return (
    <div>
      <Button variant="contained" onClick={goHome}>
        Go Home
      </Button>
      {(coins || []).map((coin, ind) => {
        return (
          <>
            <StyledListItemText id={coin.id} primary={coin.name} />
          </>
        );
      })}
    </div>
  );
};
Coins.getInitialProps = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets?limit=20");
  const json = await res.json();

  return { coins: json.data };
};

export default Coins;
