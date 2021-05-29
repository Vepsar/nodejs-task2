// const userRouter = require('./resources/users/user.router');
// const boardRouter = require('./resources/boards/board.router');
// const taskRouter = require('./resources/tasks/task.router');

import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import * as YAML from 'yamljs';
import userRouter from './resources/users/user.router';

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

app.use('/users', userRouter);
// app.use('/boards', boardRouter)
// app.use('/boards', taskRouter)
// app.use('/tasks', taskRouter)

// module.exports = app;
export { app };
