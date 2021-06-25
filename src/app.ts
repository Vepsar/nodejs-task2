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

process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);
app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);

app.use(logger);
app.use(errorDefLogger);
app.use(errLogger);
app.use('/exit', () => {
  // new Error('12456425342634hgfdhcvrdejy');
  process.exit(10);
});
// throw Error('Oops!');
// Promise.reject(Error('Oops!'));
export { app };
