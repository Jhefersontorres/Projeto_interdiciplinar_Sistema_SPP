'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {
  Route.post("/registrar", "SessionController.register");
  Route.post("/login", "SessionController.login");
}).middleware(['guest']);

Route.group(() => {
  Route.get("/user", "SessionController.register").middleware(["IsAdmin"]);
  Route.get("/user/:id", "SessionController.login").middleware(["IsAdmin"], "IsTrainees");
  Route.patch("/user/:id", "SessionController.login").middleware(["IsAdmin", "IsTrainees"]);
  Route.delete("/user/:id", "SessionController.login").middleware(["IsAdmin"]);
}).middleware(['auth:jwt']);

Route.group(() => {
  Route.get("/semestres", "SessionController.index").middleware(["IsAdmin", "IsTrainees"]);
  Route.get("/semestres/:id", "SessionController.show").middleware(["IsAdmin", "IsTrainees"]);
  Route.post("/semestres", "SessionController.create").middleware(["IsAdmin"]);
  Route.patch("/semestres/:id", "SessionController.update").middleware(["IsAdmin"]);
  Route.delete("/semestres", "SessionController.destroy").middleware(["IsAdmin"]);
}).middleware(['auth:jwt']);  

Route.group(() => {
  Route.get("/cursos", "SessionController.index").middleware(["IsAdmin", "IsTrainees"]);
  Route.get("/cursos/:id", "SessionController.show").middleware(["IsAdmin", "IsTrainees"]);
  Route.post("/cursos", "SessionController.create").middleware(["IsAdmin"]);
  Route.patch("/cursos/:id", "SessionController.update").middleware(["IsAdmin"]);
  Route.delete("/cursos", "SessionController.destroy").middleware(["IsAdmin"]);
}).middleware(['auth:jwt']); 

