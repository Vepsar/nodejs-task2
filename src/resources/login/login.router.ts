import express, { NextFunction } from 'express';
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
          res.status(200).json({ token });
        } else {
          res.status(403).send('autherr');
          res.statusMessage = 'Authorization error: ';
        }
        next();
      } catch (err) {
        if (err) {
          next(err);
        }
      }
    }
  );

export default router;
