import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.Auth.isAuthed);
  return (
    <>
      <Header />
      {!state && <Auth />}
      {!state && <Counter />}
      {state && <UserProfile />}
    </>
  );
}

export default App;
