import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    movieId: null,
    location: { id: null, name: null },
    bookingDate: null,
    bookingTime: null,
    bookedSeats: [],
  },
  reducers: {
    setBooking: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
