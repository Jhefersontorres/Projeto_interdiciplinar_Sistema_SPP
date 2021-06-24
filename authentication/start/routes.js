'use strict'

const Route = use('Route')


Route.group(() => {
  Route.post("/registrar", "SessionController.register");//OK
  Route.post("/login", "SessionController.login");//OK
}).middleware(['guest']);

Route.group(() => {
  Route.get("/usuario/:id", "SessionController.show");//OK
  Route.get("/usuarios", "SessionController.index");//OK
  Route.get("/usuario/sair/:id", "SessionController.logout");
  Route.patch("/usuario/editar/:id", "SessionController.update");//OK
  Route.delete("/usuario/deletar/:id", "SessionController.destroy");
}).middleware(['auth:jwt']);

Route.group(() => {
  Route.get("/semestres", "SemesterController.index")
  Route.get("/semestres/:id", "SemesterController.show")
  Route.post("/semestres/cadastrar", "SemesterController.create")
  Route.patch("/semestres/editar/:id", "SemesterController.update")
  Route.delete("/semestres/deletar/:id", "SemesterController.destroy")
}).middleware(['auth:jwt']);  

Route.group(() => {
  Route.get("/cursos", "CourseController.index");
  Route.get("/cursos/:id", "CourseController.show");
  Route.post("/cursos", "CourseController.create");
  Route.patch("/cursos/editar/:id", "CourseController.update");
  Route.delete("/cursos/deletar/:id", "CourseController.destroy");
}).middleware(['auth:jwt']); 

Route.group(() => {
  Route.get("/tipo_paciente", "PatientTypeController.index");
  Route.get("/tipo_paciente/:id", "PatientTypeController.show");
  Route.post("/tipo_paciente/cadastrar", "PatientTypeController.create");
  Route.patch("/tipo_paciente/editar/:id", "PatientTypeController.update");
  Route.delete("/tipo_paciente/deletar/:id", "PatientTypeController.destroy");
}).middleware(['auth:jwt']); 

Route.group(() => {  
  Route.get("/prontuario/solicitar", "MedicalRecordRequestController.requestedview");
  Route.get("/prontuario/separado", "MedicalRecordRequestController.separateview");
  Route.get("/prontuario/retirado", "MedicalRecordRequestController.withdrawnview");
  Route.get("/prontuario/devolvido", "MedicalRecordRequestController.returnedview");
  Route.get("/prontuario/solicitar/:id", "MedicalRecordRequestController.requestedview");
  Route.get("/prontuario/separado/:id", "MedicalRecordRequestController.separateview");
  Route.get("/prontuario/retirado/:id", "MedicalRecordRequestController.withdrawnview");
  Route.get("/prontuario/devolvido/:id", "MedicalRecordRequestController.returnedview");

  Route.post("/prontuario/solicitar", "MedicalRecordRequestController.createRequest");
  Route.patch("/prontuario/separado/:id", "MedicalRecordRequestController.separated");
  Route.patch("/prontuario/retirado/:id", "MedicalRecordRequestController.withdrawn");
  Route.patch("/prontuario/devolvido/:id", "MedicalRecordRequestController.returned");
  Route.delete("/prontuario/excluir/:id", "MedicalRecordRequestController.excluded");
}).middleware(['auth:jwt']); 

