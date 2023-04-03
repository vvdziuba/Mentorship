import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type ItemType = {
  title: string;
  id: number;
  likes: number;
};

export type InitialStateType = {
  value: ItemType[];
};

const initialState: InitialStateType = {
  value: [],
};

export const counterSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ItemType>) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    like: (state, action: PayloadAction<number>) => {
      const indexes = state.value.findIndex(
        (item) => item.id === action.payload
      );
      const allElements = [...state.value];
      allElements[indexes] = {
        ...allElements[indexes],
        likes: allElements[indexes].likes++,
      };
    },
    likesCounter: (state, action: PayloadAction<ItemType[]>) => {
      const likedElements = action.payload
        .slice()
        .sort((a, b) => a.likes - b.likes)
        .reverse()
        .splice(0, 3);
      return { ...state, likedElements };
    },
  },
});

export const { set, deleteItem, like, likesCounter } = counterSlice.actions;
export const selectCount = (state: RootState) => state.items.value;

export default counterSlice.reducer;
