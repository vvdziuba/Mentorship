import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useCoinsData } from "../../hooks/useCoinsData";
import ModalPortal from "../ModalPortal/ModalPortal";
import CoinsListItem from "./CoinsListItem";

const CoinsList = () => {
  const { coins } = useCoinsData(5);
  const [showModal, setShowModal] = useState(false);
  const [val, setVal] = useState({
    name: "",
    id: "",
    explorer: "",
    rank: "",
    changePercent24Hr: "",
    symbol: "",
  });

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {coins.map((value, ind) => {
        console.log(value);
        return (
          <div key={ind}>
            <ListItem key={ind} disablePadding>
              <ListItemButton
                onClick={() => {
                  setShowModal(true);
                  //@ts-ignore
                  setVal(value);
                }}
                role={undefined}
                dense
              >
                <ListItemIcon />
                <CoinsListItem id={value.id} name={value.name} />
                <CoinsListItem
                  id={value.id}
                  name={`${Number(value.priceUsd).toFixed(1)} $`}
                />
              </ListItemButton>
            </ListItem>
            <Divider light={false} />
          </div>
        );
      })}
      {showModal && (
        <ModalPortal
          isOpen={showModal}
          setShowModal={setShowModal}
          coinName={val.name}
          coinId={val.id}
          explorer={val.explorer}
          rank={val.rank}
          changePercent24Hr={val.changePercent24Hr}
          symbol={val.symbol}
        />
      )}
    </List>
  );
};
export default CoinsList;
