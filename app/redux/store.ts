import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import bookingReducer from "./bookingSlice";
import bikeCreateReducer from "./bikeCreateSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    booking: bookingReducer,
    bike: bikeCreateReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
