import { createApi } from "@reduxjs/toolkit/query/react";

import { rtkBaseQuery } from "../Basequery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: rtkBaseQuery,

  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: () => `/users/me`,
    }),
  }),
});

export const { useGetSingleUserQuery } = userApi;
