import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import * as YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import {
  logger,
  errorDefLogger,
  errLogger,
  uncaughtExceptionHandler,
} from './middleware/middleware';
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

app.use('/users', userRouter);

app.use('/boards', boardRouter);
app.use('/boards', taskRouter);
app.use(logger);
app.use(errorDefLogger);
app.use(errLogger);
// throw Error('Oops!');
export { app };
