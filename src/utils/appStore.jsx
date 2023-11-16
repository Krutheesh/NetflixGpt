import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie:movieSlice,
    gpt:gptSlice
  },
});

export default appStore;
