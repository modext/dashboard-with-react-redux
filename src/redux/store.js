import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.tsx";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
