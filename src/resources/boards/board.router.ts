import express from 'express';
import Board from './board.model';
import * as boardService from './board.service';

const router = express.Router();

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  const boards = await boardService.getAllBoards();
  res.status(200).json(boards);
});

router
  .route('/:id')
  .get(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const board = await boardService.getBoardById(id!);
    if (board === undefined) {
      res.status(404).send('not found');
    } else {
      res.status(200).json(board);
    }
  });

router.route('/').post(async (req: express.Request, res: express.Response) => {
  const data = new Board({ ...req.body });
  const board = await boardService.createBoard(data);
  res.status(201).json(board);
});

router
  .route('/:id')
  .delete(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    boardService.deleteBoard(id!);
    res.status(204).send('deleted');
  });

router
  .route('/:id')
  .put(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const data = { ...req.body };
    const updBoard = await boardService.updateBoard(id!, data);
    res.json(updBoard).status(200);
  });

export default router;
