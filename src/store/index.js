import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
      state.counter = 0;
    },
  },
});
//for authSlice
const AuthState = { isAuthed: false };

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    login(state) {
      state.isAuthed = true;
    },
    logout(state) {
      state.isAuthed = false;
    },
  },
});

const store = configureStore({
  reducer: { value: counterSlice.reducer, Auth: authSlice.reducer },
  //VIMP
  ///here createSlice.reducer is not a typo it is object underhood
});

export const counterActions = counterSlice.actions;
// //these are functions we declared we are passing the function to counter.js
export const AuthActions = authSlice.actions;
export default store;
