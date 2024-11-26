const express = require("express");
// const { jwtAuthMiddleware} = require('../middleware/jwtMiddleware')
import {jwtAuthMiddleware} from '../middleware/jwtAuthMiddleware';
const router = express.Router();
const {
    registerUser,
    loginUser
} = require(
    "../Controller/userController"
);
router.post("/register" , registerUser);
router.post("/login" , jwtAuthMiddleware, loginUser);

module.exports=router;