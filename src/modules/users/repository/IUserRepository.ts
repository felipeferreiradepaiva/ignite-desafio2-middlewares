import { ICreateUserDTO } from "./../dtos/ICreateUserDTO";
import { User } from "./../models/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;  
  findById(id: string): Promise<User>;
  update(user: User): Promise<User>;
}

export { IUsersRepository };