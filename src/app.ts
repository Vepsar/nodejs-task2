import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import * as YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import loginRouter from './resources/login/login.router';
import {
  logger,
  errorDefLogger,
  errLogger,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from './utils/middleware';
import { tokenCheck } from './utils/authmiddle';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

app.use('/users', tokenCheck, userRouter);
app.use('/boards', tokenCheck, boardRouter);
app.use('/boards', tokenCheck, taskRouter);

app.use(logger);
app.use(errorDefLogger);
app.use(errLogger);
app.use('/exit', () => {
  process.exit(10);
});
// throw Error('Oops!');
// Promise.reject(Error('Oops!'));
export { app };
