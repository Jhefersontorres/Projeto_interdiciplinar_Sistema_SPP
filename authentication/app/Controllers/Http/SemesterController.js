"use strict";

const Semester = use("App/Models/Semester");

class SemesterController {
  async index({ request, response, view }) {
    const semesters = Semester.query().where("status", 1).select("8").fech();
    return semesters;
  }

  // async show({ auth, params }) {
  //   if (auth.user.id != Number(params.id)) {
  //     return "usuário permissão.";
  //   }

  //   return auth.user;
  // }

  async create({ request, response, view }) {
    const semesters = await Semester.create(request.all());
    return semesters;
  }

  async update({ params, request, response }) {
    const semesters = await Semester.findOrFail(request.all(params.id));
    semesters.merge(semesters);
    await semesters.save();
  }
  c;
  async destroy({ params, request, response }) {
    const destroySemesters = DestroySemester.query()
      .where("id")
      .update({ status: 0 });
    return destroySemesters;
  }
}

module.exports = SemesterController;
