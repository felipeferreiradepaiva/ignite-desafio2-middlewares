import { IUsersRepository } from "../../../../modules/users/repository/IUserRepository";
import { User } from "./../../models/User";

interface IRequest{
  user_id: string;
}

class SetUserProUseCase {
  
  constructor(private userRepository:IUsersRepository) { }

  async execute({user_id}: IRequest): Promise<User>{
    const user = await this.userRepository.findById(user_id);
    
    if (!user) throw new Error("User do not exist!");
    if (user.pro) throw new Error("User is already pro!");
    
    user.pro = true;
    return this.userRepository.update(user);
  }
}

export { SetUserProUseCase }