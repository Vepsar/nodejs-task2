import express, { NextFunction } from 'express';
import User from './user.model';
import * as usersService from './user.service';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse)).status(200);
  res.statusMessage = 'OK';
});

router
  .route('/:id')
  .get(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { id } = req.params;
      const user = await usersService.getById(id);
      if (user === undefined) {
        res.status(404);
        res.statusMessage = 'User ERROR: user not found';
        next();
      } else {
        res.status(200).json(User.toResponse(user)).send();
        res.statusMessage = 'OK';
        next();
      }
    }
  );

router
  .route('/')
  .post(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const data = new User({ ...req.body });
      const newUser = await usersService.postUser(data);
      res.status(201).json(User.toResponse(newUser));
      res.statusMessage = 'User created';
      next();
    }
  );

router
  .route('/:id')
  .delete(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      const { id } = req.params;
      usersService.deleteUser(id);
      res.status(204).send('deleted');
      res.statusMessage = 'User was deleted';
      next();
    }
  );

router.route('/:id').put(
  async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = req.params;
    const data = { ...req.body };
    const updUser = await usersService.updateUser(id, data);
    if (updUser !== undefined) {
      res.status(200).json(User.toResponse(updUser));
      res.statusMessage = 'User was updated succesfully';
      next();
    } else {
      res.status(404).send();
      res.statusMessage = 'User ERROR: User not found';
      next();
    }
  }
);

export default router;
