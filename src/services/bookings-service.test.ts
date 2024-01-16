import { bookings } from "@test-config/mock-data/bookings";
import { http } from "@config/http";
import { bookingsService } from "./bookings-service";

describe('bookings-service', () => {

  const mockPost = jest.spyOn(http, 'post');
  const mockGet = jest.spyOn(http, 'get');
  const mockDelete = jest.spyOn(http, 'delete');

  const id = "123";
  const booking = bookings[0];

  it('should post bookings with id on success', async () => {
    mockPost.mockResolvedValue({ data: { id }});
    const response = await bookingsService.post(booking);
    
    expect(response.id).toBe(id);
  });

  it('should post throw an error on fail', async () => {
    mockPost.mockRejectedValue(new Error('error'));
    
    await expect(bookingsService.post(booking)).rejects.toThrow("error")
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

  it('should delete return with success', async () => {
    mockDelete.mockResolvedValue(true);
    const response = await bookingsService.delete(id);
    
    expect(response).toBe(true);
  });

  it('should delete throw an error on fail', async () => {
    mockDelete.mockRejectedValue(new Error('error'));
    
    await expect(bookingsService.delete(id)).rejects.toThrow("error")
  });
})