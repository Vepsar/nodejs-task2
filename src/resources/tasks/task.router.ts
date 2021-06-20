import express, { NextFunction } from 'express';
import { ITaskRequest } from '../../utils/types';
// import { Task } from '../entities/task';
import * as taskService from './task.service';

const router = express.Router({ mergeParams: true });

router
  .route('/:boardid/tasks')
  .get(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { boardid } = req.params;
        const tasks = await taskService.getAllTasks(boardid);
        if (tasks === undefined) {
          res.status(404);
          res.statusMessage = 'Task ERROR: Cannot find tasks for this board';
        } else {
          res.json(tasks).status(200);
          res.statusMessage = 'OK';
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:boardid/tasks/:taskid')
  .get(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { boardid, taskid } = req.params;
        const task = await taskService.getTaskById(boardid, taskid);
        if (task === undefined) {
          res.status(404);
          res.statusMessage = 'Task ERROR: Task Not Found';
          console.error();
        } else {
          res.status(200).json(task);
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:boardid/tasks')
  .post(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const boardId: string | undefined = req.params['boardid'];
        const reqBody: ITaskRequest = { ...req.body, boardId };
        if (boardId !== undefined) {
          const data = { ...reqBody };
          const task = await taskService.createTask(data);
          res.status(201).json(task);
          res.statusMessage = 'Task successfully created';
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:boardid/tasks/:taskid')
  .put(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { boardid, taskid } = req.params;
        const data = req.body;
        const updTask = await taskService.updateTask(boardid, taskid, data);
        if (updTask === undefined) {
          res.status(404);
          res.statusMessage = 'Task ERROR: Cannot update this task';
        } else {
          res.status(200).json(updTask);
          res.statusMessage = 'Task successfully updated';
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:boardid/tasks/:taskid')
  .delete(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { taskid } = req.params;
        taskService.deleteTask(taskid);
        res.status(204).send('deleted');
        res.statusMessage = 'Task was deleted';
        next();
      } catch (err) {
        next(err);
      }
    }
  );

export default router;
