import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../store";
import classes from "./Auth.module.css";
import { useRef } from "react";
const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const pass = useRef();

  const getAuthState = useSelector((state) => state.Auth.isAuthed);
  console.log(getAuthState);
  const subMithandler = (e) => {
    e.preventDefault();
    const emailId = email.current.value;
    const password = pass.current.value;
    console.log(emailId);
    console.log(password);
    dispatch(AuthActions.login());
    console.log(getAuthState);
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={subMithandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={pass} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
