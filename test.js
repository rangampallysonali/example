const request = require("supertest");
const app = require("./app");

describe("Login integration test", () => {
  test("frontend/backend can login using database", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        username: "testuser",
        password: "password123"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });
});