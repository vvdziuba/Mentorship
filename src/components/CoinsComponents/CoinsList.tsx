import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useCoinsData } from "../../hooks/useCoinsData";
import CoinsListItem from "./CoinsListItem";

const CoinsList = () => {
  const { coins } = useCoinsData(5);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {coins.map((value, ind) => {
        return (
          <div key={ind}>
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
          </div>
        );
      })}
    </List>
  );
};
export default CoinsList;
