import { ApiResponse } from "@/app/types/ApiResponse";
import { Episode } from "@/app/types/Episode";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL: string = "https://rickandmortyapi.com/api/episode";

export const episodeApiSlice = createApi({
  reducerPath: "episodes",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getEpisodes: builder.query<ApiResponse<Episode>, { page: number }>({
      query: ({ page }: { page: number }) => `/?page=${page}`,
    }),
    getEpisodeById: builder.query<Episode, { id: number }>({
      query: ({ id }: { id: number }) => `/${id}`
    })
  })
})

export const { useGetEpisodesQuery, useGetEpisodeByIdQuery } = episodeApiSlice;
