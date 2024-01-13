
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place, PlaceState, STORE_PLACES } from "./types";
import { store } from "@utils/store";

export const initialState: PlaceState = {
  data:  store.get(STORE_PLACES) as Place[] || [],
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