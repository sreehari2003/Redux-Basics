import classes from "./Counter.module.css";
//from redux
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";

const Counter = () => {
  //pass a function to useSelector
  //to acces the data
  const counter = useSelector((state) => state.value.counter);
  //use dispatch retursn an function
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    console.log(toggle);
  };
  const toggle = useSelector((view) => view.value.showCounter);
  const add = () => {
    dispatch(counterActions.increment());
  };
  const addF = () => {
    dispatch(counterActions.increase(5));
  };
  const sub = () => {
    dispatch(counterActions.decrement());
  };
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
