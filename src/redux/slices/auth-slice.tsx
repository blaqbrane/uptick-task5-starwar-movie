import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateI {
  isLoggedIn: boolean;
  currentUser: any;
}
const initialState: InitialStateI = {
  isLoggedIn: false,
  currentUser: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.currentUser = payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export default AuthSlice.reducer;

export const { getUser, logOut } = AuthSlice.actions;
