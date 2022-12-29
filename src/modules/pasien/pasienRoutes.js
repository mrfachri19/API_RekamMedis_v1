const express = require("express");

const Router = express.Router();

const pasienController = require("./pasienController");
//= ================================================================

//= ===================================================================

Router.get("/dataPasien", pasienController.getAllPasien);
Router.get("/history", pasienController.historyAllpasien);
Router.post("/addPasien", pasienController.postPasien);



module.exports = Router;
