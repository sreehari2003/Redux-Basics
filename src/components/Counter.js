import classes from "./Counter.module.css";
//from redux
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //pass a function to useSelector
  //to acces the data
  const counter = useSelector((state) => state.counter);
  //use dispatch retursn an function
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
    console.log(toggle);
  };
  const toggle = useSelector((view) => view.showCounter);
  const add = () => {
    dispatch({ type: "add", amount: 1 });
  };
  const addF = () => {
    dispatch({ type: "add", amount: 5 });
  };
  const sub = () => {
    dispatch({ type: "sub" });
  };

  const view = `   `;

  return (
    <>
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {toggle && <div className={classes.value}>{counter}</div>}
        {toggle && (
          <div className={classes.btn}>
            <button onClick={add}>add</button>
            <button onClick={addF}>add five</button>
            <button onClick={sub}>sub</button>
          </div>
        )}
        <button className={classes.btn_sub} onClick={toggleCounterHandler}>
          Toggle Counter
        </button>
      </main>
    </>
  );
};

export default Counter;
