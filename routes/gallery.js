const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('gallery/index');
});

router.post('/upload', (req, res) => {
    // Handle file upload (check if user is VIP)
    res.send('Image uploaded');
});

module.exports = router;
