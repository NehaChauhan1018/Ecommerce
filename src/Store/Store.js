import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../Services/Auth";
import { cartApi } from "../Services/Cart";
import { userApi } from "../Services/Users";
import  globalSlice  from "./Slice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authApi.middleware)
      .concat(userApi.middleware)
});

setupListeners(store.dispatch);
