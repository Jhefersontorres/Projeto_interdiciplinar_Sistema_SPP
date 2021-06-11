'use strict'

class SessionController {
  async store({ request, auth }){
    const { email, password } = request.only([
      'name',
      'email',
      'password',
      'couser',
      'semester'
    ]);
    const { token} = await auth.attempt(email, password);

    return { token };
}
}

module.exports = SessionController
