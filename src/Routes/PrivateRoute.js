import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { checkIfLogin } from "../Utils/common";

function PrivateRoute() {
  return checkIfLogin() ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
}

export default PrivateRoute;
