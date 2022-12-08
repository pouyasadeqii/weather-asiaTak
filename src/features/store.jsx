import { configureStore } from "@reduxjs/toolkit";
import daysInfoSlice from "./daysinfo/daysInfoSlice";
export const store = configureStore({
  reducer: {
    days: daysInfoSlice,
  },
});
