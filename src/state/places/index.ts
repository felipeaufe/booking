
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place, PlaceState } from "./types";

export const initialState: PlaceState = {
  data: [],
  loading: false,
  error: false
};

const slice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<Place[]>) => {
      state.data = action.payload;  
      state.loading = false;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.data = [];  
      state.loading = false;
      state.error = false;
    },
  },
})

export const { fetchSuccess, fetchFailure } = slice.actions;
export const { reducer } = slice;