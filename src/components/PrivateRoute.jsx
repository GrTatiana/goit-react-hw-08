import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUserLoggedIn } from "../redux/auth/selectors";

export const PrivateRoute = ({ element: Component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectAuthUserLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
