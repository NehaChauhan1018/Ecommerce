import { createApi } from "@reduxjs/toolkit/query/react";
import { rtkBaseQuery } from "../Basequery";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: rtkBaseQuery,
  
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        return { url: `/users/create`, body: data, method: "POST" };
      },
    }),
    logIn: builder.mutation({
      query: (data) => {
        return { url: `/auth`, body: data, method: "POST" };
      },
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = authApi;
