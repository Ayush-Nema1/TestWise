import { configureStore } from "@reduxjs/toolkit";

import testBookingReducer from "./slices/testBookingSlice";

export const store = configureStore({
  reducer: {
    testBooking: testBookingReducer,
  },
});