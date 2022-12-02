import { Request, response, Response } from 'express'
import { SetUserProUseCase } from './setUserProUseCase';



class SetUserProController{
  constructor(private setUserProUseCase: SetUserProUseCase) {}

  async handle (request: Request, Response: Response): Promise<Response>{
    const { user_id } = request.body;
    
    const user = await this.setUserProUseCase.execute(user_id)

    return response.status(201).json(user);
  }
}

export { SetUserProController }