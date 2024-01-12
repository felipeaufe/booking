import { Place } from "@state/places/types";
import { http } from "../config/http";

export const placeService = {
  async get (): Promise<Place[]> {
    try {
      const response = await http.get<Place[]>('/api/places');
      return response.data;
      
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};