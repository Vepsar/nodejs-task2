import express, { NextFunction } from 'express';
import Task from './task.model';
import * as taskService from './task.service';

const router = express.Router({ mergeParams: true });

router
  .route('/:boardid/tasks')
  .get(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { boardid } = req.params;
      const tasks = await taskService.getAllTasks(boardid);
      if (tasks === undefined) {
        res.status(404);
        res.statusMessage = 'Task ERROR: Cannot find tasks for this board';
        next();
      } else {
        res.json(tasks).status(200);
        res.statusMessage = 'OK';
        next();
      }
    }
  );

router
  .route('/:boardid/tasks/:taskid')
  .get(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { boardid, taskid } = req.params;
      const task = await taskService.getTaskById(boardid, taskid);
      if (task === undefined) {
        res.status(404);
        res.statusMessage = 'Task ERROR: Task Not Found';
        next();
      } else {
        res.status(200).json(task);
        next();
      }
    }
  );

router
  .route('/:boardid/tasks')
  .post(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { boardid } = req.params;
      const data = new Task({ ...req.body, boardId: boardid });
      const task = await taskService.createTask(data);
      res.status(201).json(task);
      res.statusMessage = 'Task successfully created';
      next();
    }
  );

router
  .route('/:boardid/tasks/:taskid')
  .put(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { boardid, taskid } = req.params;
      const data = req.body;
      const updTask = await taskService.updateTask(boardid, taskid, data);
      if (updTask === undefined) {
        res.status(404);
        res.statusMessage = 'Task ERROR: Cannot update this task';
        next();
      } else {
        res.status(200).json(updTask);
        res.statusMessage = 'Task successfully updated';
        next();
      }
    }
  );

router
  .route('/:boardid/tasks/:taskid')
  .delete(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { taskid } = req.params;
      taskService.deleteTask(taskid);
      res.status(204).send('deleted');
      res.statusMessage = 'Task was deleted';
      next();
    }
  );

export default router;
