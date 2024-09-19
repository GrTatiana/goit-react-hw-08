import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUserLoggedIn } from "../../redux/auth/selectors";
import { FcHome } from "react-icons/fc";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthUserLoggedIn);

  return (
    <nav className={css.wrapper}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
        to="/"
      >
        HOME
        <FcHome />
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
