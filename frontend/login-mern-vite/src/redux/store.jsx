import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import adminUserReducer from "./reducers/adminUserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    adminUser: adminUserReducer,
  },
});
