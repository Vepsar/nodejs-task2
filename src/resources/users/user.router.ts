import express, { NextFunction } from 'express';
import { User } from '../entities/user';
import * as usersService from './user.service';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    async (
      _req: express.Request,
      res: express.Response,
      next: NextFunction
    ) => {
      try {
        const users = await usersService.getAll();
        if (users !== undefined) {
          res.json(users.map(User.toResponse)).status(200);
          res.statusMessage = 'OK';
        }
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:id')
  .get(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const user = await usersService.getById(id);
        if (user === undefined) {
          res.status(404);
          res.statusMessage = 'User ERROR: user not found';
        } else {
          res.status(200).json(User.toResponse(user)).send();
          res.statusMessage = 'OK';
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/')
  .post(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const data = { ...req.body };
        const newUser = await usersService.postUser(data);
        if (newUser !== undefined) {
          res.status(201).json(User.toResponse(newUser));
          res.statusMessage = 'User created';
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:id')
  .delete(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        await usersService.deleteUser(id);
        res.status(204).send('deleted');
        res.statusMessage = 'User was deleted';
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router.route('/:id').put(
  async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const data = { ...req.body };
      const updUser = await usersService.updateUser(id, data);
      if (updUser !== undefined) {
        res.status(200).json(User.toResponse(updUser));
        res.statusMessage = 'User was updated succesfully';
      } else {
        res.status(404).send();
        res.statusMessage = 'User ERROR: User not found';
      }
      next();
    } catch (err) {
      next(err);
    }
  }
);

export default router;
