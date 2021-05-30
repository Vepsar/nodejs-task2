import express from 'express';
import Task from './task.model';
import * as taskService from './task.service';

const router = express.Router();

router
  .route('/:boardid/tasks')
  .get(async (req: express.Request, res: express.Response) => {
    const { boardid } = req.params;
    const tasks = await taskService.getAllTasks(boardid!);
    res.json(tasks).status(200);
  });

router
  .route('/:boardid/tasks/:taskid')
  .get(async (req: express.Request, res: express.Response) => {
    const { boardid, taskid } = req.params;
    const task = await taskService.getTaskById(boardid!, taskid!);
    if (task === undefined) {
      res.status(404).send('not found');
    } else {
      res.status(200).json(task);
    }
  });

router
  .route('/:boardid/tasks')
  .post(async (req: express.Request, res: express.Response) => {
    const { boardid } = req.params;
    const data = new Task({ ...req.body, boardId: boardid });
    const task = await taskService.createTask(data);
    res.status(201).json(task);
  });

router
  .route('/:boardid/tasks/:taskid')
  .put(async (req: express.Request, res: express.Response) => {
    const { boardid, taskid } = req.params;
    const data = req.body;
    const updTask = await taskService.updateTask(boardid!, taskid!, data);
    res.status(200).json(updTask);
  });

router
  .route('/:boardid/tasks/:taskid')
  .delete(async (req: express.Request, res: express.Response) => {
    const { taskid } = req.params;
    taskService.deleteTask(taskid!);
    res.send('deleted');
  });

export default router;
