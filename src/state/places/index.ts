import { createSlice } from "@reduxjs/toolkit";

import { store } from "@utils/store";

import { reducers } from "./reducers";
import { Place, PlaceState, STORE_PLACES } from "./types";

export const initialState: PlaceState = {
  data: (store.get(STORE_PLACES) as Place[]) || [],
};

const slice = createSlice({
  name: "places",
  initialState,
  reducers,
});

export const { fetchSuccess, fetchFailure } = slice.actions;
export const { reducer } = slice;
