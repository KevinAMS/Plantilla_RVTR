import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  name: string;
}

const initialState: CounterState = {
  value: 0,
  name: "",
};

export const ejemploSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    addName: (state, action) => {
      console.log(action);
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addName } = ejemploSlice.actions;

export default ejemploSlice.reducer;
