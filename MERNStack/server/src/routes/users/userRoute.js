const express = require('express');
const userRoute = express.Router();
const {registerUser, fetchUsersCtrl, loginUserCtrl} = require("../../controllers/users/userController");

userRoute.get("/", fetchUsersCtrl);
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUserCtrl);

module.exports = {userRoute};