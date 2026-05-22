const request = require("supertest");
const app = require("./app");

describe("Server test", () => {
  test("returns Hello from Docker", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from Docker!");
  });
});