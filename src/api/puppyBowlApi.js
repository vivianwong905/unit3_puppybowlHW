// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/",
    prepareHeaders: (headers) =>
      headers.set("Content-Type", "application/json"),
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({ //({}) this is a single line returning an object
    // Define an endpoint that fetches players
    fetchPlayers: builder.query({ // builder.query is how we define the endpoint - so this is call fetchPlayers
      // The part of the URL that comes AFTER the baseUrl for this specific endpoint
      query: () => "players", // the path - specific where the path is 
    }),
  }),
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
export default puppyBowlApi;

export const { useFetchPlayersQuery } = puppyBowlApi; //the word useFetchPlayersQuery is something that we name