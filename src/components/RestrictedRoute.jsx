import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUserLoggedIn } from "../redux/auth/selectors";

export const RestrictedRoute = ({ element: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectAuthUserLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
