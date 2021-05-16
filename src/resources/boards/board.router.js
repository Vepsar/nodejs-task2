const router = require('express').Router()
const Board = require('./board.model')
const boardService = require('./board.service')

router.route('/').get(async (req, res) => {
    const boards = await boardService.getAllBoards()
    res.status(200).json(boards)
})

router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const board = await boardService.getBoardById(id)
    if (board === undefined){
        res.status(404).send('not found')
    } else {res.status(200).json(board)}
    
})

router.route('/').post(async (req, res) =>{
    const data = new Board({...req.body})
    const board = await boardService.createBoard(data)
    res.status(201).json(board)
})

router.route('/:id').delete(async (req, res) => {
    const { id } = req.params;
    boardService.deleteBoard(id)
    res.status(204).send('deleted')
})

router.route('/:id').put(async (req, res) => {
    const { id } = req.params;
    const data = {...req.body}
    const updBoard = await boardService.updateBoard(id, data)
    res.json(updBoard).status(200)
})

module.exports = router