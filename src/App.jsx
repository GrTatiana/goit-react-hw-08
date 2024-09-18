import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./components/Layout/Layout";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage "));
const LoginPage = lazy(() => import("./pages/LoginPage "));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  if (isRefreshing) {
    return <p>User refreshing... Please wait</p>;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute element={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute element={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
