import { isJwtExpired } from "jwt-check-expiration";

// export const checkIfLogin = () => {
//   const token = localStorage.getItem("token");
//   return token && !isJwtExpired(token);
// };

// export const getSubRoute = (route, subRouteOf = "") => {
//   if (route && typeof route === "string") {
//     return subRouteOf
//       ? route.replace(subRouteOf, "").substring(1)
//       : route.substring(1);
//   }
// };

export const subString = (str, start, end) => {
  const string = str?.slice(0, start) + "..." + str?.slice(str?.length - end);
  return string;
};
export const checkIfLogin = () => {
  const token = localStorage.getItem("accessToken");
  return !!token && !isJwtExpired(token);
};
