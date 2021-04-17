import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import weatherReducer from "./weather.slice"

const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
  middleware: [...getDefaultMiddleware()]
});
export default store;
