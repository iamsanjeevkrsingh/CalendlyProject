import { Router } from "express";
import { createUser, findAllUsers, findById } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../dtos/user.dto.js";

export const userRouter: Router = Router(); // we will see the router after /users

userRouter.get('/', findAllUsers); // if there is nothing after /api/users and it is a GET request, findAllUsers will be called
userRouter.get('/:id', findById);
userRouter.post('/', validate(createUserSchema) ,createUser);