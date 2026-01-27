import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  user: string;
  bikeType: string;
  // remove indb
  // drop: string;
  modeOfRental: string;
  modeOfPayment: string;
  // remove indb
  duration: string;
  amount: number;
  // need to edit type indb
  userDetailAdded: boolean;
  booking: string;
  // added to indb
  amountPaid: number;
  fromDate: string;
  toDate: string;
  amountStatus: string;
  RatePerDay: number;
  // added to indb
}

const initialState: BookingState = {
  user: "",
  bikeType: "Select option",
  // drop: "",
  modeOfRental: "Daily",
  modeOfPayment: "Select option",
  duration: "",
  amount: 0,
  userDetailAdded: false,
  booking: "confirmed",
  amountPaid: 0,
  fromDate: "",
  toDate: "",
  amountStatus: "",
  RatePerDay: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{
        key: keyof BookingState;
        value: string | boolean;
      }>,
    ) => {
      (state[action.payload.key] as any) = action.payload.value;
    },
    updateAllBookingFields: (
      state,
      action: PayloadAction<Partial<BookingState>>,
    ) => {
      Object.assign(state, action.payload);
    },
    resetBooking: () => initialState,
  },
});

export const { updateField, resetBooking, updateAllBookingFields } =
  bookingSlice.actions;
export default bookingSlice.reducer;
