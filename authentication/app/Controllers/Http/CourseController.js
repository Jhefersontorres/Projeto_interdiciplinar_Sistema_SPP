"use strict";

const Course = use("App/Models/Course");
const { validateAll } = use("Validator");

class CourseController {
  async index({request, response, view }) {
    const courses = Course.query().where("status", 1).select("*").fetch();
    return courses;
  }
  async show({ auth, params }) {
    const courses = Course.findOrFail(params.id);
    return courses;
  }
  async create({ request, response, view }) {
    try {
      const erroMessage = {
        "description.requerid": "Campo é obrigatório",
        "description.min": "Campo deve ter mais que 4 caracteres",
        "description.unique": "Curso ja cadastrado",
      };

      const validation = await validateAll(
        request.all(),
        {
          description: "required|min:4|unique:courses",
        },
        erroMessage
      );
      if (validation.fails()) {
        return response.status(401).send({ message: validation.messages() });
      }
      const data = request.all();
      const courses = await Course.create(data);
      response.status(200).send({ message: "Curso cadastrado com sucesso" });
      return courses;
    } catch (err) {
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
      const courses = await Course.findOrFail(params.id);
      const data = request.all();
      courses.merge(data);
      await courses.save();
      response.status(200).send({ message: "Curso alterado com sucesso" });
      return courses;
    } catch (error) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
  }

  async destroy({ params, request, response }) {
    const destroyCourses = Course.query()
      .where("id", params.id)
      .update({ status: 0 });
      response.status(200).send({ message: "Curso excluido com sucesso" });
    return destroyCourses;
  }
}

module.exports = CourseController;
