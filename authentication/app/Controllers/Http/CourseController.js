"use strict";

const Course = use("App/Models/Course");
class CourseController {
  async index({}) {
    const courses = Course.query().where("status", 1).select("8").fech();
    return courses;
  }

  async create({ request, response, view }) {
    const courses = await Course.create(request.all());
    return courses;
  }

  async update({ params, request, response }) {
    const courses = await Course.findOrFail(request.all(params.id));
    courses.merge(courses);
    await courses.save();
  }

  async destroy({ params, request, response }) {
    const destroyCourses = DestroyCouser.query()
      .where("id")
      .update({ status: 0 });
    return destroyCourses;
  }
}

module.exports = CourseController;
