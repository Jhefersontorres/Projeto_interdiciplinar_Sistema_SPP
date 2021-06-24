'use strict'
const PatientType = use("App/Models/PatientType");
const { validateAll } = use("Validator");


class PatientTypeController {

  async index ({ request, response, view }) {
    const PatientTypes = PatientType.query().where("status", 1).select("*").fetch();
    return PatientTypes;
  }

  async create ({ request, response, view }) {
    try {
      const erroMessage = {
        "description.requerid": "Campo é obrigatório",
        "description.min": "Campo deve ter mais que 4 caracteres",
        "description.unique": "Tipo paciente ja cadastrado",
      };

      const validation = await validateAll(
        request.all(),
        {
          description: "required|min:4|unique:patient_types",
        },
        erroMessage
      );
      if (validation.fails()) {
        return response.status(401).send({ message: validation.messages() });
      }
      const data = request.all();
      const PatientTypes = await PatientType.create(data);
      response.status(200).send({ message: "Tipo paciente cadastrado com sucesso" });
      return PatientTypes;
    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
  }

  async show ({ params, request, response, view }) {
    const PatientTypes = PatientType.findOrFail(params.id);
    return PatientTypes;
  }

  async update ({ params, request, response }) {
    try {
      const erroMessage = {
        "description.requerid": "Esse campo é obrigatório",
        "description.min": "Nome de usuário deve ter mais que 4 caracteres",
        "description.unique": "Tipo paciente já cadastrado",
      };

      const validation = await validateAll(
        request.all(),
        {
          description: "required|min:4|unique:patient_types",
        },
        erroMessage
      );
      if (validation.fails()) {
        return response.status(401).send({ message: validation.messages() });
      }
      const PatientTypes = await PatientType.findOrFail(params.id);
      const data = request.all();
      PatientTypes.merge(data);
      await PatientTypes.save();
      response.status(200).send({ message: "Tipo paciente alterado com sucesso" });
      return PatientTypes;
    } catch (error) {
      return response.status(500).send({ error: `Erro: ${err.message}` });
    }
  }

  async destroy ({ params, request, response }) {
    const destroyPatientTypes = PatientType.query()
    .where("id", params.id)
    .update({ status: 0 });
    response.status(200).send({ message: "Tipo paciente excluido com sucesso" });
  return destroyPatientTypes;
  }
}

module.exports = PatientTypeController
