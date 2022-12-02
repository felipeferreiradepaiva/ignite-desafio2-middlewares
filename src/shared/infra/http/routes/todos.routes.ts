
import { Router } from 'express'

const todoRoutes  = Router();

todoRoutes.get("/", checksExistsUserAccount, getTodosController.handle);
todoRoutes.post("/", checksExistsUserAccount, checksCreateTodosUserAvailability, createTodoController.handle);
todoRoutes.put("/:id", checksTodoExists, updateTodoController.handle)
todoRoutes.patch("/:id/done", checksTodoExists, doneTodoController.handle)
todoRoutes.delete("/:id", checksExistsUserAccount, checksTodoExists, deleteTodoController.handle)

export { todoRoutes };
/*
app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, checksCreateTodosUserAvailability, (request, response) => {
  const { title, deadline } = request.body;
  const { user } = request;

  

  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});

app.put('/todos/:id', checksTodoExists, (request, response) => {
  const { title, deadline } = request.body;
  const { todo } = request;

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.json(todo);
});

app.patch('/todos/:id/done', checksTodoExists, (request, response) => {
  const { todo } = request;

  todo.done = true;

  return response.json(todo);
});

app.delete('/todos/:id', checksExistsUserAccount, checksTodoExists, (request, response) => {
  const { user, todo } = request;

  const todoIndex = user.todos.indexOf(todo);

  if (todoIndex === -1) {
    return response.status(404).json({ error: 'Todo not found' });
  }

  user.todos.splice(todoIndex, 1);

  return response.status(204).send();
});
*/