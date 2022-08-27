const express = require("express");
const routes = express.Router();

const RegistrationController = require("./controllers/RegistrationController");
const LoginController = require("./controllers/LoginController");

// Registration routes

routes.get("/cadastros", RegistrationController.index);
routes.post("/cadastro", RegistrationController.save);
routes.delete("/cadastro/:id", RegistrationController.destroy);
routes.get("/cadastro/:id", RegistrationController.show);
routes.put("/cadastro/:id", RegistrationController.update);

// Login routes

routes.get("/logins", LoginController.index);
routes.post("/login", LoginController.save);
routes.delete("/login/:id", LoginController.destroy);
routes.get("/login/:id", LoginController.show);
routes.put("/login/:id", LoginController.update);

module.exports = routes;