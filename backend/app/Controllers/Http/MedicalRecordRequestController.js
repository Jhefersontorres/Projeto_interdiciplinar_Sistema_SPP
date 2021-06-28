'use strict'

const Solicitation = use("App/Models/MedicalRecordRequest")
const { validateAll } = use("Validator");


class MedicalRecordRequestController {
  async createRequest ({ request, response, auth }) {

      const { id } = auth.user;
       const {name_patient, surname, patient_types_id, date_solicitation } = request.all();
        const Solicitations = await Solicitation.create({name_patient, surname, patient_types_id, date_solicitation, user_id: id });

         response.status(200).send({ message: "Tipo paciente cadastrado com sucesso" });

      return Solicitations;

  }

//View
  async requestedview ({ view }) {
    const MedicalRecordRequest = Solicitation.query().where("status", 1).select("*").fetch();
    return MedicalRecordRequest;
  }

  async separateview ({ view }) {
    const MedicalRecordRequest = Solicitation.query().where("status", 2).select("*").fetch();
    return MedicalRecordRequest;
  }

  async withdrawnview ({ view}) {
    const MedicalRecordRequest = Solicitation.query().where("status", 3).select("*").fetch();
    return MedicalRecordRequest;
  }

  async returnedview ({ view }) {
    const MedicalRecordRequest = Solicitation.query().where("status", 4).select("*").fetch();
    return MedicalRecordRequest;
  }

 //UPDATES STATUS SOLICITATIONS MEDICAL RECORD REQUEST
  async separated ({ params, response, auth  }) {

    const { id } = auth.user;
    const SeparatedMedicalRecord = Solicitation.query()
      .where("id", params.id)
      .update({ status: 2, user_id_update: id });
      response.status(200).send({ message: "Prontuário do paciente separado" });
    return SeparatedMedicalRecord;
  }

  async withdrawn ({ params, response, auth }) {
    const { id } = auth.user;
    const MedicalRecordWithdrawn = Solicitation.query()
      .where("id", params.id)
      .update({ status: 3, user_id_update: id });
      response.status(200).send({ message: "Prontuário do paciente retirado" });
      return MedicalRecordWithdrawn;
  }

  async returned ({ params, response, auth  }) {
    const { id } = auth.user;
    const ReturnedMedicalRecord = Solicitation.query()
      .where("id", params.id)
      .update({ status: 4, user_id_update: id });
      response.status(200).send({ message: "Prontuário do paciente devolvido" });
      return ReturnedMedicalRecord;
  }

  async excluded  ({ params, response, auth}) {
    const { id } = auth.user;
    const ReturnedMedicalRecord = Solicitation.query()
      .where("id", params.id)
      .update({ status: 0, user_id_update: id });
      response.status(200).send({ message: "Prontuário do paciente excluido" });
      return ReturnedMedicalRecord;
  }
}

module.exports = MedicalRecordRequestController
