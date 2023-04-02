import { ListItemText } from "@mui/material";
import { CoinsItems } from "../store/coins";

const CoinsListItem = (name: Pick<CoinsItems, "name" | "id">) => {
  return <ListItemText id={name.id} primary={name.name} />;
};
export default CoinsListItem;
