import { http } from "./http";

describe('http', () => {
  it('should return an axios instance', () => {
    expect(http.constructor.name).toBe('wrap')
    expect(http.defaults.baseURL).toBe('')

    expect(typeof http.get).toBe('function')
    expect(typeof http.post).toBe('function')
  })
});