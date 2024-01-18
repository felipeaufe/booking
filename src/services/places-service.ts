import { http } from "@config/http";

import { Place } from "@state/places/types";

export const placesService = {
  async get(): Promise<Place[]> {
    try {
      const response = await http.get<Place[]>("/api/places");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
