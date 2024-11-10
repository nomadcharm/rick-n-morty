"use client";
import { configureStore } from "@reduxjs/toolkit";
import { charactersApiSlice } from "./Features/CharactersApi/charactersApiSlice";
import { episodeApiSlice } from "./Features/EpisodesApi/episodesApiSlice";

export const store = configureStore({
  reducer: {
    [charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
    [episodeApiSlice.reducerPath]: episodeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      charactersApiSlice.middleware,
      episodeApiSlice.middleware,
    ]);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;