import { Router } from "express"
import { findUserById } from "./../middlewares/findUserById";
import { createUserController } from "./../../../../modules/users/usecase/createUser/";
import { getUserController } from "./../../../../modules/users/usecase/getUser";
import { setUserProController } from "./../../../../modules/users/usecase/setUserPro";

// Create routes in path /users
const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/:id', findUserById, getUserController.handle)
userRoutes.patch('/:id/pro', findUserById, setUserProController.handle)

export { userRoutes };
/*
app.post('/users', (request: Request, response: Response): Response => {
  const { name, username } = request.body;

  const usernameAlreadyExists = users.some((user) => user.username === username);

  if (usernameAlreadyExists) {
    return response.status(400).json({ error: 'Username already exists' });
  }
  
  users.push(user);

  return response.status(201).json(user);
});

app.get('/users/:id', findUserById, (request, response) => {
  const { user } = request.params;

  return response.json(user);
});
*/

/*
app.patch('/users/:id/pro', findUserById, (request, response) => {
  const { user } = request;

  if (user.pro) {
    return response.status(400).json({ error: 'Pro plan is already activated.' });
  }

  user.pro = true;

  return response.json(user);
});
*/

