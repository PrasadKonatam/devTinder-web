import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage when Redux initializes
const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
  name: "user",
  initialState: savedUser, // Use saved user from localStorage
  reducers: {
    addUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
      return action.payload;
    },
    removeUser: () => {
      localStorage.removeItem("user"); // Clear user from localStorage
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
