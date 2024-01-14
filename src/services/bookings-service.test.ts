import { bookings } from "@test-config/mock-data/bookings";
import { http } from "@config/http";
import { bookingsService } from "./bookings-service";

describe('bookings-service', () => {

  const mockPost = jest.spyOn(http, 'post');
  const mockGet = jest.spyOn(http, 'get');

  const booking = bookings[0];

  it('should set bookings with id on success', async () => {
    const id = "123";
    mockPost.mockResolvedValue({ data: { id }});
    const response = await bookingsService.set(booking);
    
    expect(response.id).toBe(id);
  });

  it('should get return bookings on success', async () => {
    mockGet.mockResolvedValue({ data: [booking]});
    const response = await bookingsService.get();
    
    expect(response).toMatchObject([booking]);
    expect(response.length).toBe(1);
  });


  it('should get throw an error on fail', async () => {
    mockGet.mockRejectedValue(new Error('error'));
    
    await expect(bookingsService.get()).rejects.toThrow("error")
  });
})