import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { rtkBaseQuery } from "../Basequery";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: rtkBaseQuery,
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    createUserCart: builder.mutation({
      query: (data) => {
        return {
          url: `/carts/update`,
          body: data,
          method: "PUT",
        };
      },
      invalidatesTags: ["cart"],
    }),

    getUserCart: builder.query({
      query: () => `/carts/:id`,
      providesTags: ["cart"],
    }),

    deleteCartItem: builder.mutation({
      query: (data) => {
        console.log(data, "show me data");
        return {
          url: `/carts/delete-product/${data}`,

          method: "PUT",
        };
      },
    }),
  }),
});

export const {
  useCreateUserCartMutation,
  useGetUserCartQuery,
  useDeleteCartItemMutation,
} = cartApi;
