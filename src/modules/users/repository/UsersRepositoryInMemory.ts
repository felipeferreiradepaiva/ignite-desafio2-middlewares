import { User } from "../models/User";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "./IUserRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  
  
  users: User[] = [];

  private static INSTANCE: UsersRepositoryInMemory;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepositoryInMemory {
    if (!UsersRepositoryInMemory.INSTANCE) {
      UsersRepositoryInMemory.INSTANCE = new UsersRepositoryInMemory();
    }

    return UsersRepositoryInMemory.INSTANCE;
  }

  async create({
    name,
    username,    
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      username,      
    });

    this.users.push(user);    

    return user;
  }
  
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async update(user: User) {
    const userIndex = this.users.findIndex((a) => a.id === user.id)
    return this.users[userIndex] = user;
  }
}

export { UsersRepositoryInMemory };