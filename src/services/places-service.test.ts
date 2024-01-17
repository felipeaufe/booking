import { places } from '@test-config/mock-data/places';
import { http } from '@config/http';
import { placesService } from './places-service';

describe('places-service', () => {
  const mockGet = jest.spyOn(http, 'get');
  const place = places[0];

  it('should get return places on success', async () => {
    mockGet.mockResolvedValue({ data: [place] });
    const response = await placesService.get();

    expect(response).toMatchObject([place]);
    expect(response.length).toBe(1);
  });

  it('should get throw an error on fail', async () => {
    mockGet.mockRejectedValue(new Error('error'));

    await expect(placesService.get()).rejects.toThrow('error');
  });
});
