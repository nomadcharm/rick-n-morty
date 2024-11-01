"use client";
import { configureStore } from "@reduxjs/toolkit";
import { charactersApiSlice } from "./Features/CharactersApi/charactersApiSlice";

export const store = configureStore({
  reducer: {
    [charactersApiSlice.reducerPath]: charactersApiSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      charactersApiSlice.middleware,
    ]);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;