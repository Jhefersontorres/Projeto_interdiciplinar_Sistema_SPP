const { test, trait } = use("Test/Suite")("Forgot Password");
const Mail = use("Mail");

const User = use("App/Models/User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

trait("Test/ApiClient");
trait("DataBaseTransactions");

test("it should send an email with resert password instructions", async ({
  assert,
  client,
}) => {
  Mail.fake();

  const forgotpasswordPayload = {
    email: "jheferson@hotmail.com",
  };

  await Factory.model("App/Models/User").create(forgotpasswordPayload);

  const response = await client
    .post("/forgotpassword")
    .send(forgotpasswordPayload)
    .end();

  response.assertStatus(200);
  const recentEmail = Mail.pullRecent();

  assert.equal(recentEmail.message.to[0].address, forgotpasswordPayload.email);
  assert.equal(recentEmail.message.to[0].name, forgotpasswordPayload.name);

  Mail.restore();
});
