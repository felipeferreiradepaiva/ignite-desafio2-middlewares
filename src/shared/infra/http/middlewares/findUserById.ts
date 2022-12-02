import { NextFunction, Request, Response } from "express";
import { UsersRepositoryInMemory } from "./../../../../modules/users/repository/UsersRepositoryInMemory";

export async function findUserById(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;

  const usersRepository = UsersRepositoryInMemory.getInstance();
  const user = await usersRepository.findById(id);

  if (!user) {
    throw new Error("User do not exists!");
  }

  return next();
}