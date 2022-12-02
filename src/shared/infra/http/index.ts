import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

/*
const users = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

function checksCreateTodosUserAvailability(request, response, next) {
  // Complete aqui
}

function checksTodoExists(request, response, next) {
  // Complete aqui
}

function findUserById(request, response, next) {
  // Complete aqui
}
*/


export { app };