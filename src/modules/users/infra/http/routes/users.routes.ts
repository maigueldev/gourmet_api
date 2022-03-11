import { Router } from "express";
// import multer from "multer";
import { celebrate, Joi, Segments } from "celebrate";

import UsersController from "@modules/users/infra/http/controllers/users.controllers";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
    '/',
    celebrate({
      [Segments.BODY]: {
        first_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        password_confirmation: Joi.valid(Joi.ref('password')).required(),
      },
    }),
    usersController.create,
);

export default usersRouter;