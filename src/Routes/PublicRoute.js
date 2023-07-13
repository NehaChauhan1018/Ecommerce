import { Navigate, Outlet } from "react-router-dom";
import { checkIfLogin } from "../Utils/common";

const PublicRoute = () => {
  if (!checkIfLogin()) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PublicRoute;
