import { configureStore } from "@reduxjs/toolkit";
import controllerTheme from "./reducers/theme";

export const store = configureStore({
  reducer: { controllerTheme },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
