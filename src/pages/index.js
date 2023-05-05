import { useRouter } from "next/router";
import { Button } from "@mui/material";

function CoinsPage() {
  const navigate = useRouter();
  const goToCoins = () => {
    navigate.replace("/coins");
  };
  return (
    <Button variant="contained" onClick={goToCoins}>
      Go To Coins
    </Button>
  );
}

export default CoinsPage;
