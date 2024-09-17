import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userId: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.userId = action.payload.userId;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
