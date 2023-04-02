import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CoinsItems } from "../store/coins";
import CoinsListItem from "./CoinsListItem";

const CoinsList = () => {
  // @ts-ignore
  const { coins } = useSelector<RootState>((store) => store?.coins);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {((coins.data as CoinsItems[]) || []).map((value, ind) => {
        return (
          <>
            <ListItem key={ind} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemIcon />
                <CoinsListItem id={value.id} name={value.name} />
                <CoinsListItem
                  id={value.id}
                  name={`${Number(value.priceUsd).toFixed(1)} $`}
                />
              </ListItemButton>
            </ListItem>
            <Divider light={false} />
          </>
        );
      })}
    </List>
  );
};
export default CoinsList;
