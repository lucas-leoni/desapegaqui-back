const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

// User routes

routes.get("/users", UserController.index);
routes.post("/user", UserController.save);
routes.delete("/user/:id", UserController.destroy);
routes.get("/user/:id", UserController.show);
routes.put("/user/:id", UserController.update);

// Login route

routes.post("/login", UserController.login);

module.exports = routes;