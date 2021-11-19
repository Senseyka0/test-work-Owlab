import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";

import { setIsAuth, setUserData } from "./store/slices/authSlice";

import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      dispatch(setUserData({ login: localStorage.getItem("login") }));
      dispatch(setIsAuth(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />

      <Container maxWidth="lg">
        <AppRouter />
      </Container>
    </div>
  );
};

export default App;
