import styled from "styled-components";
import { ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Link from "next/link";

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
          <Link href={"/coins/" + coin.id} key={coin.id}>
            <StyledListItemText id={coin.id} primary={coin.name} />
          </Link>
        );
      })}
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets?limit=20");
  const json = await res.json();

  return { props: { coins: json.data } };
};

export default Coins;
