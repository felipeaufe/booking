import { PayloadAction } from "@reduxjs/toolkit";
import { Place, PlaceState } from "./types";
import { WritableDraft } from "src/types";

export const reducers = {
  fetchSuccess: (state: WritableDraft<PlaceState>, action: PayloadAction<Place[]>) => {
    state.data = action.payload;  
    state.loading = false;
    state.error = false;
  },
  fetchFailure: (state: WritableDraft<PlaceState>) => {
    state.data = [];  
    state.loading = false;
    state.error = true;
  },
}