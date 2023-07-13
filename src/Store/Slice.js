import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export default globalSlice.reducer;
export const { setToken } = globalSlice.actions;
