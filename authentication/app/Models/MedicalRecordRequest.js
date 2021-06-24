'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MedicalRecordRequest extends Model {
  user(){
    return this.belongsTo("App/Models/User");
  }
  semester(){
    return this.hasMany("App/Models/semester");
  }
  course(){
    return this.hasMany("App/Models/course");
  }
  patienttype (){
    return this.hasMany("App/Models/PatientType");
  }
  medicalrecordrequest (){
    return this.hasMany("App/Models/MedicalRecordRequest");
  }
}

module.exports = MedicalRecordRequest