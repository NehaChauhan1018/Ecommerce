import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const rtkBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  prepareHeaders: (headers, { getState }) => {
    // const token = useSelector((state) => state.global.token);
    const authToken = localStorage.getItem("accessToken");
    console.log(authToken, "vey much");
    if (authToken) {
      headers.set("Authorization", `${authToken}`);
    }
    return headers;
  },
});
