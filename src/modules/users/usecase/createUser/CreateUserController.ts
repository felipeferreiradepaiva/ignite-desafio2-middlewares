import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle (request: Request, response: Response): Response{
    const {
      name,
      username
    } = request.body;
    
    const user = this.createUserUseCase.execute({name, username});

    return response.status(200).json(user); 
  }
}

export { CreateUserController }