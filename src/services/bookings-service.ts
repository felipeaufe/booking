import { http } from "@config/http";
import { Booking } from "@state/bookings/types";

export const bookingsService = {
  async set (booking: Booking): Promise<Booking> {
    try {
      const response = await http.post<{ id: string }>('/api/bookings', booking);
      const { id } = response.data;
      
      return {
        ...booking,
        id
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}