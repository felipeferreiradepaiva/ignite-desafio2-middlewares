import { User } from "./../../../../modules/users/models/User";
import { IUsersRepository } from "./../../../../modules/users/repository/IUserRepository";

interface IRequest{
  name: string;
  username: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository){}

  async execute({ name, username }: IRequest): Promise<User>{
    return await this.userRepository.create({name, username});
  }
}

export { CreateUserUseCase }