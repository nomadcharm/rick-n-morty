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
    getCharacters: builder.query<ApiResponse, { page: number }>({
      query: ({ page }: { page: number }) => `/?page=${page}`,
    }),
    getCharacterById: builder.query<Character, { id: number }>({
      query: ({ id }: { id: number }) => `/${id}`,
    }),
  })
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApiSlice;

export const getAllCharacterIds = async () => {
  const allCharacterIds = [];
  const totalPages = 42;

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${BASE_URL}?page=${page}`);

    if (!response.ok) {
      throw new Error(`Cannot get the character ids from page ${page}`);
    }

    const characters: ApiResponse = await response.json();
    allCharacterIds.push(...characters.results.map(character => character.id));
  }

  return allCharacterIds;
};
