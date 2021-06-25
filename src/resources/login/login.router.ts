import express, { NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken'
// import {getUserByLogin} from '../users/user.service'
import { getToken } from './login.service';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { login, password } = req.body;
        const token = await getToken(login, password);
        if (token !== undefined) {
          res.status(200).json(token);
        } else {
          res.status(403);
          res.statusMessage = 'Authorization error: ';
        }
      } catch (err) {
        if (err) {
          next(err);
        }
      }
    }
  );

export default router;
