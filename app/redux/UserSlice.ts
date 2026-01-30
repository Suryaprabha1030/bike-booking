import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
  adminId: string;
  name: string;
  user: string;
  address: string;
  proofType: string;
  image: string;
  // proofNumber: string;
}

const initialState = {
  adminId: "",
  name: "",
  user: "",
  address: "",
  proofType: "Select option",
  image: "",
  // proofNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserField: (
      state,
      action: PayloadAction<{
        key: keyof userState;
        value: string | boolean;
      }>,
    ) => {
      (state[action.payload.key] as any) = action.payload.value;
    },
    updateAllUserFields: (state, action: PayloadAction<Partial<userState>>) => {
      Object.assign(state, action.payload);
    },
    resetBooking: () => initialState,
  },
});

export const { updateUserField, updateAllUserFields } = userSlice.actions;
export default userSlice.reducer;
