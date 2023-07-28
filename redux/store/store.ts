import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../../redux/slices/project.slice";

export const store = configureStore({
  /** Render your reducers here */
  reducer: { project: projectReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
