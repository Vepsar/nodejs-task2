import express, { NextFunction } from 'express';
import Board from './board.model';
import * as boardService from './board.service';

let router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    async (
      _req: express.Request,
      res: express.Response,
      next: NextFunction
    ) => {
      try {
        const boards = await boardService.getAllBoards();
        res.status(200).json(boards);
        next();
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
        const board = await boardService.getBoardById(id!);
        if (board === undefined) {
          res.status(404).send('not found');
          res.statusMessage = 'Board ERROR: Board not found';
        } else {
          res.status(200).json(board);
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
      const data = new Board({ ...req.body });
      const board = await boardService.createBoard(data);
      res.status(201).json(board);
      res.statusMessage = 'Board created';
      next();
    }
  );

router
  .route('/:id')
  .delete(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        boardService.deleteBoard(id);
        res.status(204).send('deleted');
        res.statusMessage = 'Board was succesfully deleted';
        next();
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:id')
  .put(
    async (req: express.Request, res: express.Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const data = { ...req.body };
        const updBoard = await boardService.updateBoard(id, data);
        if (updBoard === undefined) {
          res.status(404);
          res.statusMessage = 'Board ERROR: Cannot update board';
        } else {
          res.json(updBoard).status(200);
          res.statusMessage = 'Board was succesfully updated';
        }
        next();
      } catch (err) {
        next(err);
      }
    }
  );

export default router;
