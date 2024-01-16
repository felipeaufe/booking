import { http } from "@config/http";

export const newsletterService = {
  async post (email: string): Promise<boolean> {
    try {
      await http.post<boolean>('/api/newsletter', { email });      
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
}