import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items";
import coinsReducer from "./coins";
export const store = configureStore({
  reducer: {
    items: itemsReducer,
    coins: coinsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
