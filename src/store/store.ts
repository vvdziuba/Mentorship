import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items";
import coinsReducer from "./coins";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
    coins: coinsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
