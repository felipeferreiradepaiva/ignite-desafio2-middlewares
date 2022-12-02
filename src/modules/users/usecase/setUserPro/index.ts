import { UsersRepositoryInMemory } from "./../../repository/UsersRepositoryInMemory";
import { SetUserProUseCase } from "./setUserProUseCase";
import { SetUserProController } from "./SetUserProController";

const usersRepository = UsersRepositoryInMemory.getInstance();
const setUserProUseCase = new SetUserProUseCase(usersRepository);
const setUserProController = new SetUserProController(setUserProUseCase);

export { setUserProController }