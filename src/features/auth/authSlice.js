import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userId: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
      state.userId = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
