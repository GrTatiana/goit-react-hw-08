import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUserLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthUserLoggedIn);

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          {" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="/register"
          >
            Sing In
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="/login"
          >
            Log In
          </NavLink>
        </>
      )}
    </nav>
  );
};
