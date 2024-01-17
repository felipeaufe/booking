import { http } from '@config/http';
import { Booking } from '@state/bookings/types';

export const bookingsService = {
  async post(booking: Booking): Promise<Booking> {
    try {
      const response = await http.post<{ id: string }>(
        '/api/bookings',
        booking,
      );
      const { id } = response.data;

      return {
        ...booking,
        id,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async get(): Promise<Booking[]> {
    try {
      const response = await http.get<Booking[]>('/api/bookings');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async put(booking: Booking): Promise<Booking> {
    try {
      const { id, ...data } = booking;

      await http.put(`/api/bookings/${id}`, data);

      return booking;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async delete(id: string): Promise<boolean> {
    try {
      await http.delete<Booking[]>(`/api/bookings/${id}`);
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
