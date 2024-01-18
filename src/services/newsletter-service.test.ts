import { http } from "@config/http";

import { newsletterService } from "./newsletter-service";

describe("newsletter-service", () => {
  const email = "teste@teste.com";
  const mockPost = jest.spyOn(http, "post");

  it("should return true if success", async () => {
    mockPost.mockResolvedValue(true);
    const response = await newsletterService.post(email);
    expect(response).toBe(true);
  });

  it("should delete throw an error on fail", async () => {
    mockPost.mockRejectedValue(new Error("error"));

    await expect(newsletterService.post(email)).rejects.toThrow("error");
  });
});
