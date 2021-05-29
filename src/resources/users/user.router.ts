import express from 'express';
const router = express.Router();
// const User = require('./user.model');
import User from './user.model';
import * as usersService from './user.service';
// const usersService = require('./user.service');

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router
  .route('/:id')
  .get(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const user = await usersService.getById(id!);
    res.status(200).json(User.toResponse(user));
  });

router.route('/').post(async (req: express.Request, res: express.Response) => {
  const data = new User({ ...req.body });
  const newUser = await usersService.postUser(data);
  res.status(201).json(User.toResponse(newUser));
});

router
  .route('/:id')
  .delete(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    usersService.deleteUser(id!);
    res.status(204).send('deleted');
  });

router
  .route('/:id')
  .put(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const data = { ...req.body };
    const updUser = await usersService.updateUser(id!, data);
    res.json(User.toResponse(updUser!)).status(200);
  });

export default router;
// module.exports = router;
