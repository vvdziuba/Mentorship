import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { AppDispatch, RootState } from "./store/store";
import Divider from "@mui/material/Divider";
import { getCoins } from "./store/coins";
import CircularProgress from "@mui/material/CircularProgress";

const StyledLoader = styled(CircularProgress)`
  margin-top: 20px;
`;

const Coins = () => {
  const dispatch = useDispatch<AppDispatch>();

  // @ts-ignore
  const { coins, loading } = useSelector<RootState>((store) => store?.coins);

  console.log(loading);
  useEffect(() => {
    dispatch(getCoins());
  }, []);
  const showCoins = () => {
    dispatch(getCoins());
  };

  return (
    <>
      <Button variant="contained" onClick={() => showCoins()}>
        Update Coins
      </Button>
      {loading && <StyledLoader color="secondary" />}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {((coins.data as any[]) || []).map((value, ind) => {
          return (
            <>
              <ListItem key={ind} disablePadding>
                <ListItemButton role={undefined} dense>
                  <ListItemIcon />
                  <ListItemText id={value.id} primary={value.name} />
                  <ListItemText
                    id={value.id}
                    primary={`${Number(value.priceUsd).toFixed(1)} $`}
                  />
                </ListItemButton>
              </ListItem>

              <Divider light={false} />
            </>
          );
        })}
      </List>
    </>
  );
};

export default Coins;
