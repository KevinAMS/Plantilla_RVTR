import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-slices/counterSlice";
import ejemploSlice from "../redux-slices/ejemploSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formulario: ejemploSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
