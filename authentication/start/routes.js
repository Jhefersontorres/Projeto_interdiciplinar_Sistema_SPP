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
  Route.get("/cursos", "MedicalRecordRequestController.index");
  Route.get("/cursos/:id", "MedicalRecordRequestController.show");
  Route.post("/cursos", "MedicalRecordRequestController.create");
  Route.patch("/cursos/:id", "MedicalRecordRequestController.update");
  Route.delete("/cursos", "MedicalRecordRequestController.destroy");
}).middleware(['auth:jwt']); 

