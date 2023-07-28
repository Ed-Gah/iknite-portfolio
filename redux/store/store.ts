import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  /** Render your reducers here */
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
