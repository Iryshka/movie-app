import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import bookingReducer from "../features/booking/bookingSlice.js";

export const store = configureStore({
  reducer: {
    userAuth: authReducer,
    userBooking: bookingReducer,
  },
});
