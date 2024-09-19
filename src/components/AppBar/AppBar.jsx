import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectAuthUserLoggedIn } from "../../redux/auth/selectors";
import style from "./AppBar.module.css";

const AppBar = () => {
  const loggedIn = useSelector(selectAuthUserLoggedIn);
  return (
    <header className={style.header}>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
