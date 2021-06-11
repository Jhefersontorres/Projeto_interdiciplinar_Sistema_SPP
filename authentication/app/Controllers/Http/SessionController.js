"use strict";
const User = use("App/Models/User");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with semesters
 */
class SessionController {
  async register({ request, auth }) {
    const user = await User.create(request.all());
    await auth.login(user);
    return user;
  }

  async login({ request, response, auth }) {
    try {
      const { email, password } = request.all();
      const validaToken = await auth.attempt(email, password);

      return validaToken;
    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
  }

  async show({ auth, params }) {
    if (auth.user.id != Number(params.id)) {
      return "usuário permissão.";
    }

    return auth.user;
  }

  async logout({ response, auth }) {
    try {
      const islogged = await auth.check();
      if (islogged) {
        await auth.logout();
      }

      return response.status(403).send({ info: "Usuário Desconectado" });
    } catch (error) {
      return response.status(401).send({ info: "Usuário precisa está logado" });
    }
  }

  async update({ response, request, params, auth }) {
    if (auth.user.id != Number(params.id)) {
      return "Usuário sem permissão.";
    } else {
      try {
        const user = await User.findOrFail(request.all(params.id));
        user.merge(User);
        await user.save();
      } catch (error) {
        return response
          .status(500)
          .send({ info: "Servidor esta apresentando erro" });
      }
    }

    return user;
  }

  async destroy({ }) {
    const destroyUser = DestroyUser.query().where("id").update({ status: 0 });
    return destroyUser;
  }
}

module.exports = SessionController;
