import { UsersRepositoryInMemory } from "./../../../../modules/users/repository/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const usersRepositoryInMemory = UsersRepositoryInMemory.getInstance();
const createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }