const express = require('express');
const router = express.Router();

// Display all forum topics
router.get('/', (req, res) => {
    res.render('forums/index');
});

// Display a specific topic
router.get('/:topicId', (req, res) => {
    const topicId = req.params.topicId;
    res.render('forums/topic', { topicId });
});

module.exports = router;
