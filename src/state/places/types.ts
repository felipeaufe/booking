export interface Place {
  code: string;
  name: string;
  description: string;
  rate: number;
  images: string[];
  state: string;
  country: string;
}

export interface PlaceState {
  readonly data: Place[];
}

export const STORE_PLACES = "places";
