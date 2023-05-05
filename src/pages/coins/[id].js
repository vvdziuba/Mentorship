import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets?limit=20");
  const json = await res.json();
  const paths = json.data.map((coin) => {
    return {
      params: { id: coin.id },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://api.coincap.io/v2/assets/" + id);
  const coins = await res.json();
  return {
    props: { coin: coins.data },
  };
};

const CoinDetailsPage = ({ coin }) => {
  const navigate = useRouter();

  const goBack = () => {
    navigate.replace("/coins");
  };

  return (
    <div>
      <Button variant="contained" onClick={goBack}>
        Go Back
      </Button>
      <Typography>
        <p>{coin.name}</p>
        <p>Coin id: {coin.id}</p>
        <p>Symbol: {coin.symbol}</p>
        <p>Rank: {coin.rank}</p>
        <p>
          Link:{" "}
          <a target="_blank" href={coin.explorer}>
            {coin.explorer}
          </a>
        </p>
        <p>Change Percent 24Hr: {Number(coin.changePercent24Hr).toFixed(5)}</p>
      </Typography>
      <Image src="/my-bitcoin.jpg" alt="Pic" width={100} height={100} />
    </div>
  );
};
export default CoinDetailsPage;
