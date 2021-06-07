const express = require('express');
const router = express.Router();
const controller = require('./board.controller');

router.get('/notice',controller.notice)
router.get('/review',controller.review)
router.get('/curriculum',controller.curriculum)
router.get('/faq',controller.faq)
router.get('/hashtag',controller.hashtag)
router.get('/info',controller.info)

module.exports = router;