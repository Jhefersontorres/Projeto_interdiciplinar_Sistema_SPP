const { test, trait } = use("Test/Suite")("Session");
const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

trait("Test/ApiClient");
trait("DataBaseTransactions");

test("it should return JWT token when session created", async ({
  assert,
  client,
}) => {
  const sessionPayload = {
    email: "jheferson@hotmail.com",
    password: "123456",
  };

  const user = await Factory.model("App/Models/User").create(sessionPayload);

  const response = await client.post("/sessions").send(sessionPayload).end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
