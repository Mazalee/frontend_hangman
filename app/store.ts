import { configureStore } from "@reduxjs/toolkit";
import { initializeSlice } from "./features/initialize/initialize";
import { gameSlice } from "./features/gameSlice";

export const store = configureStore({
  reducer: {
    initialize: initializeSlice.reducer,
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
