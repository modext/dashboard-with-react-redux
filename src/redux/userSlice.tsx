import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    bio: "",
    jobTitle: "",
    age:"",
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.bio = action.payload.bio;
      state.jobTitle = action.payload.jobTitle;
    },
  },
});

export const { update } = userSlice.actions;

export default userSlice.reducer;
