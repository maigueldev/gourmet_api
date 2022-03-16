import { Request, Response } from "express";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

import CreateUserService from "@modules/users/services/CreateUserService";


export default class UsersController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, first_name, password } = req.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            first_name,
            email,
            password,
        });

        return res.json(instanceToInstance(user));
    }
}
