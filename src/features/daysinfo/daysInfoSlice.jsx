import { createSlice } from "@reduxjs/toolkit";

const daysSlice = createSlice({
  name: "counter",
  initialState: { data: {} },
  reducers: {
    updateData: (state, action) => {
      state.data = action;
    },
  },
});
export const { updateData } = daysSlice.actions;
export default daysSlice.reducer;
