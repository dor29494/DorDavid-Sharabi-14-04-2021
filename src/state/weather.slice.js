import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
  darkMode: false,
  },
  reducers: {
    darkModeToggle: (state, action) => {
      return {
        ...state,
        darkMode: action.payload
      };
    },
  }
});
export const {
    darkModeToggle
} = weatherSlice.actions;
export default weatherSlice.reducer;
