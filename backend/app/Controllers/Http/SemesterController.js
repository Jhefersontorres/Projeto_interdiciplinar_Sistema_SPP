"use strict";

const Semester = use("App/Models/Semester");
const { validateAll } = use("Validator");

class SemesterController {
  async index({ request, response, view }) {
    const semesters = Semester.query().where("status", 1).select("*").fetch();
    return semesters;
  }

  async show({ auth, params }) {
    const semesters = Semester.findOrFail(params.id);
    return semesters;
  }

  async create({ request, response, view }) {
    try {
      const erroMessage = {
        "description.requerid": "Esse campo é obrigatório",
        "description.min": "Nome de usuário deve ter mais que 4 caracteres",
        "description.unique": "Semestre já cadastrado",
      };

      const validation = await validateAll(
        request.all(),
        {
          description: "required|min:4|unique:semesters",
        },
        erroMessage
      );
      if (validation.fails()) {
        return response.status(401).send({ message: validation.messages() });
      }
      const data = request.only(["description"]);
      const semesters = await Semester.create(data);
      return semesters;
    } catch (error) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
  }

  async update({ params, request, response }) {
    try {
      const erroMessage = {
        "description.requerid": "Esse campo é obrigatório",
        "description.min": "Nome de usuário deve ter mais que 4 caracteres",
        "description.unique": "Semestre já cadastrado",
      };

      const validation = await validateAll(
        request.all(),
        {
          description: "required|min:4|unique:semesters",
        },
        erroMessage
      );
      if (validation.fails()) {
        return response.status(401).send({ message: validation.messages() });
      }
      const semesters = await Semester.findOrFail(params.id);
      const data = request.all();
      semesters.merge(data);
      await semesters.save();
      response.status(200).send({ message: "Semestre alterado com sucesso" });
      return semesters;
    } catch (error) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
  }

  async destroy({ params, request, response }) {
    const destroySemesters = Semester.query()
      .where("id", params.id)
      .update({ status: 0 });
    response.status(200).send({ message: "Semestre excluido com sucesso" });
    return destroySemesters;
  }
}

module.exports = SemesterController;
