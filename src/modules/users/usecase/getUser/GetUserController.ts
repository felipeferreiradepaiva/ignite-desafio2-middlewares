import { Request, response, Response } from 'express'

class GetUserController{
  constructor() {}

  handle (request: Request, Response: Response): Response{
    const { user } = request.body;
    return response.status(200).json(user);
  }
}

export { GetUserController }