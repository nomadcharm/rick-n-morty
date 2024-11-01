import { ApiResponse } from "@/app/types/ApiResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersApiSlice = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ApiResponse, { page: number }>({
      query: ({ page }: { page: number }) => `/?page=${page}`,
    })
  })
});

export const { useGetCharactersQuery } = charactersApiSlice;