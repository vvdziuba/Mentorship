import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import "./App.css";
import { useDispatch } from "react-redux";
import { set, deleteItem, like } from "./store/items";
import { Button } from "@mui/material";
import { store } from "./store/store";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Divider from "@mui/material/Divider";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();
  const state = store.getState()?.items;

  const [data, setData] = useState({ value: [] });

  const handleDelete = (id: any) => {
    dispatch(deleteItem(id));
    // @ts-ignore
    setData(state);
  };

  const addItem = () => {
    dispatch(
      set({
        // @ts-ignore
        id: state.value.length + 1,
        likes: 0,
        // @ts-ignore
        title: `item number${state.value.length + 1}`,
      })
    );
    // @ts-ignore
    setData(state);
  };

  const likeItem = (id: number) => {
    // @ts-ignore
    dispatch(like(id));
    // @ts-ignore
    setData(state);
  };

  return (
    <StyledContainer>
      <Button variant="contained" onClick={addItem}>
        Add Item
      </Button>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {(state.value || data.value).map((value, ind) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <>
              <ListItem
                key={ind}
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(value.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => likeItem(value.id)}
                    >
                      <ThumbUpIcon />
                    </IconButton>
                  </>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon />
                  <ListItemText
                    id={labelId}
                    primary={`${value.title} has ${value.likes} likes`}
                  />
                </ListItemButton>
              </ListItem>
              <Divider light={false} />
            </>
          );
        })}
      </List>
    </StyledContainer>
  );
}

export default App;
