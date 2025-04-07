const express = require('express');
const router = express.Router();
const { getMoods, createMood, deleteMood } = require('../controllers/moodController');

router.get('/', getMoods);
router.post('/', createMood);
router.delete('/:id', deleteMood);

module.exports = router;
