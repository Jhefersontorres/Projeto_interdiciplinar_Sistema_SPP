"use strict";
const User = use("App/Models/User");
const { validateAll } = use("Validator");

class SessionController {
  async register({ request, response }) {
    try {
      const erroMessage = {
        "fullname.requerid": "Esse campo é obrigatório",
        "fullname.min": "Nome de usuário deve ter mais que 4 caracteres",
        "email.email": "Email informado invalido",
        "email.requerid": "Campo de email obrigatório",
        "email.unique": "Email já existe",
        "password.min": "Senha deve conter minimo 4 caracteres",
        "course_id.requerid": "Esse campo é obrigatório",
        "semester_id.requerid": "Esse campo é obrigatório",
      };

      const validation = await validateAll(
        request.all(),
        {
          fullname: "required|min:4|unique:users",
          email: "required|email|unique:users",
          password: "required|min:4",
          course_id: "required",
          semester_id: "required",
        },
        erroMessage
      );

      if (validation.fails()) {
        return response.status(401).send({ message: validation.messages() });
      }

      const data = request.only([
        "fullname",
        "email",
        "password",
        "course_id",
        "semester_id",
        "roles",
        "status",
      ]);

      const user = await User.create(data);

      return user;
    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
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
      return "Usuário sem permissão.";
    }

    return auth.user;
  }

  async logout({ response, auth, params }) {
    if (auth.user.id != Number(params.id)) {
      return "Usuário sem permissão.";
    }

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
    }
    const datauser = await User.findOrFail(params.id);
    const data = request.all();
    datauser.merge(data);
    await datauser.save();

    return datauser;
  }

  async destroy({ response, params }) {
    const destroyUser = User
      .query()
      .where("id", params.id)
      .update({ status: 0 });
    response.status(200).send({ message: "Usuário excluido com sucesso" });
    return destroyUser;
  }

}

module.exports = SessionController;
