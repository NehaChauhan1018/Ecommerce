import { useNavigate } from "react-router-dom";
import "./App.css";
import AppRouter from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./Store/Slice";
function App() {
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    const token = localStorage.getItem("accessToken");

    dispatch(setToken(token));
    console.log(token, "tokenish");
  }, [dispatch]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);
  return (
    <div className="App">
      <ToastContainer />

      <AppRouter />
    </div>
  );
}

export default App;
