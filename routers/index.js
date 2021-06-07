const express = require('express');
const router = express.Router()

const mainRouter = require('./main/main')
const boardRouter = require('./board/board')

router.use('/',mainRouter);
router.use('/board',boardRouter);

module.exports = router;