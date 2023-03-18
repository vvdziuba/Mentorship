import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type ItemType = {
  title: string;
  id: number;
  likes: number;
};

export type ItemsType = {
  value: ItemType[];
};

// Define the initial state using that type
const initialState: ItemsType = {
  // @ts-ignore
  value: [],
};

export const counterSlice = createSlice({
  name: "items",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ItemsType>) => {
      // @ts-ignore
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
  },
});
export const { set, deleteItem, like } = counterSlice.actions;
export const selectCount = (state: RootState) => state.items.value;

export default counterSlice.reducer;
