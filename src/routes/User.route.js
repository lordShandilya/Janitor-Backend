import { Router } from "express";
import { UserController } from "../controllers/User.controller.js";
import UserMiddleware from "../middlewares/User.middleware.js";

const userRouter = Router();
const userController = new UserController();
const userMiddleware = new UserMiddleware(userController.service, userController.jwt);

userRouter.post('/signup', userMiddleware.validateUserData.bind(userMiddleware), userController.userSignUp.bind(userController));
userRouter.post('/login', userController.userLogin.bind(userController));

export {
    userRouter
}