import * as jwt from 'jsonwebtoken';
import express from 'express';

const tokenCheck = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader !== undefined) {
      const [connect, token] = authHeader.split(' ');
      if (connect !== 'Bearer') {
        res.send(401).send('Unauthorize access');
        res.statusMessage = 'Unauthorize access';
      } else {
        if (token !== undefined) {
          jwt.verify(token, `${process.env['SECRET_KEY']}`);
        }
      }
    } else {
      res.status(401).send('Unauthorize access');
      res.statusMessage = 'Unauthorize access';
    }
    next();
  } catch (err) {
    next(err);
  }
};

const createToken = async (
  id: string | undefined,
  login: string
): Promise<string> =>
  jwt.sign({ id, login }, `${process.env['SECRET_KEY']}`, {
    expiresIn: '5m',
  });

export { tokenCheck, createToken };
