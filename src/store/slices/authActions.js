import axios from "axios";

import { setError, setIsAuth, setIsLoading, setUserData } from "./authSlice";

export const fetchLogin = (data) => (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    setTimeout(async () => {
      const response = await axios.get("./users.json");

      const mockUser = response.data.find(
        (user) => user.login === data.login && user.password === data.password
      );

      if (mockUser) {
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("login", mockUser.login);

        dispatch(setUserData(mockUser));
        dispatch(setIsAuth(true));
      } else {
        dispatch(setError("Username or password entered incorrectly"));
      }
    }, 2000);
  } catch (error) {
    dispatch(setError("Something was wrong, please try again"));
  }
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("login");

  dispatch(setUserData({}));
  dispatch(setIsAuth(false));
};
