import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';


interface IRequestDTO {
    email: string,
    first_name: string,
    password: string,
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

    ) {}

    public async execute({ email, first_name, password }: IRequestDTO): Promise<User> {

        const user = await this.usersRepository.create({
            email,
            first_name,
            password,
          });

        return user;
    }
}

export default CreateUserService;