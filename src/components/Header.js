import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store";

const Header = () => {
  const change = useDispatch();
  const logOut = () => {
    change(AuthActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
