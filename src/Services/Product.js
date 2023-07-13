import { authApi } from "./Auth";

export const productsApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `/product`,
      }),
    }),
    getSingleProduct: builder.query({
      query: (id)=>({
        url: `/product/${id}`,
        id:id
      })
    })
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
