'use strict'



// const InvalidAccessException = require("../Exceptions/InvalidAccessException");
// const NoSuchResourceException = require("../Exceptions/NoSuchResourceException");
// const Solicitation = use("App/Models/MedicalRecordRequest")
// const Couser = use("App/Models/Course")
// const Semester = use("App/Models/Semester")
// const PatientType = use("App/Models/PatientType")


class IsAdmin {

  async handle ({ rsponse, request, params, auth }, next) {
    // // call next to advance the request
    // const loginUser = await auth.getUser();

    // const {id} = params
    // const solicitation = await Solicitation.find(id);
    // if(!solicitation) {
    //   throw new NoSuchResourceException();
    // }

    // if(solicitation.user_id !== loginUser.id){
    //   throw new InvalidAccessException();
    // }

    // request.solicitation = solicitation;

    

    await next()
  }
}

module.exports = IsAdmin
