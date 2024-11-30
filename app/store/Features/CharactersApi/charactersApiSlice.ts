import { ApiResponse } from "@/app/types/ApiResponse";
import { Character } from "@/app/types/Character";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL: string = "https://rickandmortyapi.com/api/character";

export const charactersApiSlice = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ApiResponse<Character>, { page: number }>({
      query: ({ page }: { page: number }) => `/?page=${page}`,
    }),
    getCharacterById: builder.query<Character, { id: number }>({
      query: ({ id }: { id: number }) => `/${id}`,
    }),
  })
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApiSlice;