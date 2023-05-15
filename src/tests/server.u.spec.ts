import request from "supertest";
import server from "../server";

describe("Test Likes API Express Server", () => {
  test("the '/' endpoint with a POST request to add a new like", async () => {
    // arrange
    const like = {
      id: "1",
      userId: "2",
      charityId: "3",
      dateLiked: "14-07-2022",
    };
    const expectedStatusCode = 201;
    // act
    const response = await request(server).post("/").send(like);
    // assert
    expect(response.status).toEqual(expectedStatusCode);
  });
  test("the '/getLikeByUserId' endpoint with a POST request containing an existing user id", async () => {
    // arrange
    const userId = "cef9a9b6-676e-4017-aa64-e87627ea0748";
    const requestObject = {
      userId: userId,
    };
    const expectedStatusCode = 201;
    // act
    const response = await request(server)
      .post("/getLikeByUserId")
      .send(requestObject);
    // assert
    expect(response.status).toEqual(expectedStatusCode);
  });
  test("the '/getLikeByUserId' endpoint with a POST request containing an unknown user id", async () => {
    // arrange
    const userId = "abababab-aaaa-bbbb-aaaa-bbbbbbaaaaaa";
    const requestObject = {
      userId: userId,
    };
    const expectedStatusCode = 404;
    // act
    const response = await request(server)
      .post("/getLikeByUserId")
      .send(requestObject);
    // assert
    expect(response.status).toEqual(expectedStatusCode);
  });
});
