import { ApiResponse } from "@/app/types/ApiResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `https://rickandmortyapi.com/api/location`;

export const locationApiSlice = createApi({
  reducerPath: "location",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getLocations: builder.query<ApiResponse<Location>, { page: number }>({
      query: ({ page }: { page: number }) => `/?page=${page}`,
    }),
    getLocationById: builder.query<Location, { id: number }>({
      query: ({ id }: { id: number }) => `/${id}`
    })
  })
})

export const { useGetLocationsQuery, useGetLocationByIdQuery } = locationApiSlice;