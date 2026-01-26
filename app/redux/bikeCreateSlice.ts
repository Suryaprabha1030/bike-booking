import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface bikeCreateState {
  location: string;
  BikeType: string;
  RatePerDay: number | null;
  imageBase64: string;
  text: string;
  bikeStatus: string;
}

const initialState: bikeCreateState = {
  location: "",
  BikeType: "",
  RatePerDay: null,
  imageBase64: "",
  text: "",
  bikeStatus: "Available",
};

const bikeCreateSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    updateBikeField: (
      state,
      action: PayloadAction<{
        key: keyof bikeCreateState;
        value: string | boolean;
      }>
    ) => {
      (state[action.payload.key] as any) = action.payload.value;
    },
    updateAllBikeFields: (
      state,
      action: PayloadAction<Partial<bikeCreateState>>
    ) => {
      Object.assign(state, action.payload);
    },
    resetBike: () => initialState,
  },
});

export const { updateBikeField, resetBike, updateAllBikeFields } =
  bikeCreateSlice.actions;
export default bikeCreateSlice.reducer;
