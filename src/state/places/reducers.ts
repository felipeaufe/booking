import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "src/types";

import { Place, PlaceState } from "./types";

export const reducers = {
  fetchSuccess(
    state: WritableDraft<PlaceState>,
    action: PayloadAction<Place[]>,
  ) {
    state.data = action.payload;
  },
  fetchFailure(state: WritableDraft<PlaceState>) {
    state.data = [];
  },
};
