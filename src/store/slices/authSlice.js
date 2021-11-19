import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  error: "",
  isAuth: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUserData, setIsAuth, setError, setIsLoading } = authSlice.actions;
