import { ListItemText } from "@mui/material";
import { CoinsItemInterface } from "../../store/coins";
import { FC } from "react";

type CoinsListItemProps = Partial<CoinsItemInterface>;
// type CoinsListItemProps = Omit<CoinsItemInterface, "priceUsd">;
// type CoinsListItemProps = Pick<CoinsItemInterface, "name" | "id">;

const CoinsListItem: FC<CoinsListItemProps> = (props) => {
  const { id, name } = props;
  return <ListItemText id={id} primary={name} />;
};

export default CoinsListItem;
