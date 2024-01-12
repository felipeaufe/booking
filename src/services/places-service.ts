import { http } from "../config/http";

export interface Place {
  code: string;
  name: string;
  description: string;
  rate: number;
  images: string[];
  state: string;
  country: string;
}

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