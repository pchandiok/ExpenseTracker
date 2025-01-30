const express = require('express');
const incomeRoute = express.Router();
const { createIncCtrl, fetchAllIncCtrl, fetchIncCtrl } = require("../../controllers/income/incomeController");

incomeRoute.post("/", createIncCtrl);
incomeRoute.get("/", fetchAllIncCtrl);
incomeRoute.get("/:id", fetchIncCtrl);

module.exports = {incomeRoute};