import Navigation from "../AppBar/AppBar";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import style from "./AppBar.module.css";
import { selectAuthUserLoggedIn } from "../../redux/auth/selectors";

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
